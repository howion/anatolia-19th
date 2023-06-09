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
        const query = String(req.query.query ?? '')

        if (!query) {
            return res.status(HTTPStatusCode.OK).json({
                success: true,
                data: []
            })
        }

        const features = await Database.feature.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query
                        }
                    },
                    {
                        city: {
                            contains: query
                        }
                    },
                    {
                        occupations: {
                            some: {
                                name: {
                                    contains: query
                                }
                            }
                        }
                    }
                ]
            },
            skip: 0,
            take: 20,
            select: {
                id: true,
                occupations: true,
                name: true,
                city: true,
                yearStart: true,
                yearEnd: true,
                type: true,
                isLocationPrecise: true
            }
        })

        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: features
        })
    } catch (error) {
        console.log(error)
        return res.status(HTTPStatusCode.InternalServerError).json({
            success: false,
            error
        })
    }
}
