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

    try {
        const found = await Database.feature.findMany({
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
            take: 10
        })

        const features: Record<number, any> = {}

        for (const feature of found) {
            features[feature.id] = {
                ...feature,
                marker: feature.marker.id,
                relationsF: feature.relationsF.map((r) => r.id)
            }
        }

        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: {
                pinpoints: features
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
