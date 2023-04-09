import type { NextApiRequest, NextApiResponse } from 'next'
// import type { ApiFailureCode } from '../constants/api/api-failure-code'

export type ApiQueryType = Record<text, text | text[]>

export interface ApiRequest<T extends ApiQueryType = ApiQueryType> extends NextApiRequest {
    query: T & ApiQueryType
}

// export interface ApiFailureResponseError {
//     code: ApiFailureCode
//     message: text
// }

export interface ApiFailureResponse {
    success: false
    error: any
}

export type ApiResponseSchema<T extends Record<text, any> = Record<text, any>> =
    | ApiFailureResponse
    | ({ success: true } & { data: T })

export type ApiResponse<T extends Record<text, any> = Record<text, any>> = NextApiResponse<ApiResponseSchema<T>>
