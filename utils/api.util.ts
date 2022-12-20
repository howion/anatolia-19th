import NextCors from 'nextjs-cors'
import { ApiFailureCode } from '/constants/api/api-failure-code'
import { HTTPStatusCode } from '/constants/http-status-code'
import { ApiRequest, ApiResponse } from '/types/api'

export async function CORS(req: ApiRequest, res: ApiResponse): Promise<void> {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    })
}

export function checkMethod(req: ApiRequest, res: ApiResponse, allowedMethods: text[]): boolean {
    if (!allowedMethods.includes(req.method ?? '')) {
        res.status(HTTPStatusCode.OK).json({
            success: false,
            error: {
                code: ApiFailureCode.RequestMethodInvalid,
                message: `Invalid method: ${req.method}`
            }
        })
        return false
    }
    return true
}

// export function checkJoi<T>(req: ApiRequest, res: ApiResponse, joi: Joi.ObjectSchema<T>): T | false {
//     const validation = joi.validate(req.method === 'GET' ? req.query : req.body.params)

//     if (validation.error !== undefined || !validation.value) {
//         console.log(validation.error);

//         res.status(HTTPStatusCode.OK).json({
//             success: false,
//             error: {
//                 code: ApiFailureCode.RequestBodyInvalid,
//                 message: validation.error ? validation.error.message : 'Invalid Request'
//             }
//         })

//         return false
//     }

//     return validation.value
// }
