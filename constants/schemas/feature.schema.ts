import { FeatureGeometryType } from '/lib/database'

export interface ApiFeature {
    activities: any // TODO
    author: ApiFeaturesAuthor
    authorId: number
    city: text
    contributors: any // TODO
    createdAt: text // in ... format
    updatedAt: text // in ... format
    id: number
    sid: text
    isLocationPrecise: boolean
    lon: number
    lat: number
    markdown?: text
    markedId: number
    name: text
    occupations: any // TODO
    points: any // TODO
    sourceDetail: any // TODO
    sources: ApiFeaturesSource[]
    type: FeatureGeometryType
    yearStart?: number
    yearEnd?: number
}

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

export interface ApiFeaturesSource {
    id: number
    shortName: text
    source: text
    url?: text
}
