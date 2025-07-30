import type { ApiResponseSchema } from '/types/api'
import type { ApiFeature, ApiFeaturesReponse } from '/constants/schemas/feature.schema'

import axios from 'axios'

export const MAPBOX_PUBLIC_TOKEN =
    'pk.eyJ1IjoiaG93aW9uIiwiYSI6ImNtZHFsdzFwcTA4OTUyc3Nha3ZzemlmaGsifQ.pZyPielMiKkQQtZ3174rwQ'

export const MAPBOX_STYLE_MAP = 'mapbox://styles/howion/clbrzux99000p14pmookcim4w'
export const MAPBOX_STYLE_CONTACT = 'mapbox://styles/howion/clbrzux99000p14pmookcim4w'

export const isClient = () => typeof window !== 'undefined'

export function hideBodyScroll(): void {
    if (window?.document?.body) {
        window.document.body.style.overflow = 'hidden'
    }
}

export function showBodyScroll(overflow = 'overlay'): void {
    if (window?.document?.body) {
        window.document.body.style.overflow = overflow
    }
}

export async function makeApiRequest<T extends Record<text, any> = Record<text, any>>(
    method: 'GET' | 'POST',
    path: text,
    params?: Record<any, any>,
    body?: Record<any, any>
): Promise<ApiResponseSchema<T> | null> {
    try {
        const res = await axios({
            method,
            url: `/api/${path}`,
            data: body,
            params: params
        })

        if (!res) return null

        return res.data as ApiResponseSchema<T>
    } catch {
        return null
    }
}

export async function retrieveAllFeatures(): Promise<ApiResponseSchema<ApiFeaturesReponse> | null> {
    return await makeApiRequest<ApiFeaturesReponse>('GET', '/map')
}

export async function retrieveFeature(id: number): Promise<ApiResponseSchema<ApiFeature> | null> {
    return await makeApiRequest<any>('GET', `/map/feature/${id}`)
}

export async function searchFeatures(query: text): Promise<ApiResponseSchema<ApiFeature[]> | null> {
    return await makeApiRequest<any>('GET', '/map/feature/search', {
        query
    })
}

export async function submitData(data: any): Promise<ApiResponseSchema | null> {
    return await makeApiRequest<any>('POST', '/contact', undefined, data)
}
