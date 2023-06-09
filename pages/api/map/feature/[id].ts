import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod } from '/utils/api.util'
import { Database } from '/lib/database'

export default async function Handle(req: ApiRequest, res: ApiResponse<any>): Promise<void> {
    // await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    try {
        const { id } = req.query
        const nid = Number.parseInt(id as string)

        const feature = await Database.feature.findUnique({
            where: {
                id: nid
            },
            include: {
                occupations: true,
                sources: true,
                author: true,
                contributors: true,
                activities: true
            }
        })

        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: feature
        })
    } catch (error) {
        console.log(error)
        return res.status(HTTPStatusCode.InternalServerError).json({
            success: false,
            error
        })
    }
}
