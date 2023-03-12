import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod, CORS } from '/utils/api.util'
import { Database } from '/lib/database'
import { Mapbox } from '/lib/mapbox'

export default async function GETFeatures(req: ApiRequest, res: ApiResponse<any>): Promise<void> {
    await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    try {
        const dataset = await Mapbox.retrieveDatasetFeatures()

        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: {
                dataset
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
