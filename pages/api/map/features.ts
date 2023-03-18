import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod } from '/utils/api.util'
import { Database } from '/lib/database'

export default async function GETFeatures(req: ApiRequest, res: ApiResponse<any>): Promise<void> {
    // await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    let { take } = req.query as Record<text, any>

    take = take ? Number.parseInt(take) : 10

    if (take) {
        take = Number.parseInt(take)

        if (Number.isNaN(take)) {
            take = 10
        }
    } else {
        take = 10
    }

    try {
        const _pinpoints = await Database.pinpoint.findMany({
            where: {
                // lat: { gt: 0 },
                // lon: { gt: 0 }
            },
            select: {
                createdAt: false,
                updatedAt: false,
                relationsB: false,
                sources: false,

                id: true,
                lat: true,
                lon: true,
                yearStart: true,
                yearEnd: true,

                marker: {
                    select: {
                        id: true
                    }
                },
                relationsF: {
                    select: {
                        id: true
                    }
                }
            },
            take: take
        })

        const pinpoints: Record<number, any> = {}

        for (const pinpoint of _pinpoints) {
            pinpoints[pinpoint.id] = {
                ...pinpoint,
                marker: pinpoint.marker.id,
                relationsF: pinpoint.relationsF.map((r) => r.id)
            }
        }

        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: {
                pinpoints: pinpoints
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(HTTPStatusCode.InternalServerError).json({
            success: false,
            error
        })
    }
}
