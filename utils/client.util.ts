import axios from 'axios'
import { ApiResponseSchema } from '/types/api'
import { ApiFeaturesReponse } from '/constants/schemas/feature.schema'

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
        return await ClientUtil.makeApiRequest<ApiFeaturesReponse>('/map')
    }

    public static async retrieveFeature(id: number) {
        return await ClientUtil.makeApiRequest<any>(`/map/feature/${id}`)
    }

    public static async makeApiRequest<T extends Record<text, any> = Record<text, any>>(
        path: text,
        method: 'GET' | 'POST' = 'GET',
        params?: Record<any, any>
    ): Promise<ApiResponseSchema<T> | null> {
        try {
            const res = await axios({
                method,
                url: '/api/' + path,
                data: method === 'POST' ? params : undefined,
                params: method === 'POST' ? undefined : params
            })

            if (!res) return null

            return res.data as ApiResponseSchema<T>
        } catch {
            return null
        }
    }
}
