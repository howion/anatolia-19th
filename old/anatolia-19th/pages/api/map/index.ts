import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod, CORS } from '/utils/api.util'

export default async function GetUser(req: ApiRequest, res: ApiResponse<any>): Promise<void> {
    await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    return res.status(HTTPStatusCode.OK).json({
        success: true,
        data: {
            // user: {
            //     ...requestedUser,
            //     balance: pool[3]
            // },
            // searches,
            // orders,
            // basket,
            // hareketler: pool[4],
            // odemeler: pool[5]
        }
    })
}
