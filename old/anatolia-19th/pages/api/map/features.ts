import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod, CORS } from '/utils/api.util'
import { Database } from '/lib/database'

export default async function GETFeatures(req: ApiRequest, res: ApiResponse<any>): Promise<void> {
    await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    try {
        const pinpoints = await Database.pinpoint.findMany({
            where: {
                // lat: { gt: 0 },
                // lon: { gt: 0 }
            },
            include: {
                marker: false,
                relationsF: {
                    select: {
                        id: true
                    }
                },
                relationsB: false,
                sources: true
            },
            take: 10
        })

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
