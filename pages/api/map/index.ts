import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod } from '/utils/api.util'
import { Database } from '/lib/database'
import { ApiFeaturesReponse } from '/constants/schemas/feature.schema'
import { retrieveAllFeatures } from '/models/feature.modal'

export default async function Handle(req: ApiRequest, res: ApiResponse<ApiFeaturesReponse>): Promise<void> {
    // await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    try {
        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: await retrieveAllFeatures()
        })
    } catch (error) {
        return res.status(HTTPStatusCode.InternalServerError).json({
            success: false,
            error
        })
    }
}
