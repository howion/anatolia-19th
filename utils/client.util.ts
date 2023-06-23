import axios from 'axios'
import { ApiResponseSchema } from '/types/api'
import { ApiFeature, ApiFeaturesReponse } from '/constants/schemas/feature.schema'

export class ClientUtil {
    public static readonly MAPBOX_PUBLIC_TOKEN =
        'pk.eyJ1IjoiaG93aW9uIiwiYSI6ImNsYjh6b2gycDBia2ozd21nYjh3Y2JmcWUifQ.DE19OL-ugnq3dq66xKjoEw'

    public static readonly MAPBOX_STYLE_MAP = 'mapbox://styles/howion/clbrzux99000p14pmookcim4w'
    public static readonly MAPBOX_STYLE_CONTACT = 'mapbox://styles/howion/clbrzux99000p14pmookcim4w'

    public static isClient = typeof window !== 'undefined'

    public static hideBodyScroll(): void {
        if (window && window.document && window.document.body) {
            window.document.body.style.overflow = 'hidden'
        }
    }

    public static showBodyScroll(overflow = 'overlay'): void {
        if (window && window.document && window.document.body) {
            window.document.body.style.overflow = overflow
        }
    }

    public static async retrieveAllFeatures(): Promise<ApiResponseSchema<ApiFeaturesReponse> | null> {
        return await ClientUtil.makeApiRequest<ApiFeaturesReponse>('GET', '/map')
    }

    public static async retrieveFeature(id: number): Promise<ApiResponseSchema<ApiFeature> | null> {
        return await ClientUtil.makeApiRequest<any>('GET', `/map/feature/${id}`)
    }

    public static async searchFeatures(query: text): Promise<ApiResponseSchema<ApiFeature[]> | null> {
        return await ClientUtil.makeApiRequest<any>('GET', '/map/feature/search', {
            query
        })
    }

    public static async submitData(data: any): Promise<ApiResponseSchema | null> {
        return await ClientUtil.makeApiRequest<any>('POST', '/contact', undefined, data)
    }

    public static async makeApiRequest<T extends Record<text, any> = Record<text, any>>(
        method: 'GET' | 'POST',
        path: text,
        params?: Record<any, any>,
        body?: Record<any, any>
    ): Promise<ApiResponseSchema<T> | null> {
        try {
            const res = await axios({
                method,
                url: '/api/' + path,
                data: body,
                params: params
            })

            if (!res) return null

            return res.data as ApiResponseSchema<T>
        } catch {
            return null
        }
    }
}
