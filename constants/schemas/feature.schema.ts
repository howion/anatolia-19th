export interface ApiFeature {}

export interface ApiFeaturesReponse {
    points: Record<number, ApiFeaturesFeature>
    polygons: Record<number, ApiFeaturesFeature>
    GSON: Record<any, any>
    markers: Record<number, ApiFeaturesMarker>
    authors: Record<number, ApiFeaturesAuthor>
}

export interface ApiFeaturesFeature {
    id: number
    lat: number
    lon: number
    markerId: number
    authorId: number
    relationsF: number[]
    points?: [number, number][]
}

export interface ApiFeaturesMarker {
    id: number
    color: text | null
    icon: text | null
}

export interface ApiFeaturesAuthor {
    id: number
    name: text
}
