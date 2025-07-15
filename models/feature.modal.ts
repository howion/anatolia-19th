import type { ApiFeature, ApiFeaturesReponse } from '/constants/schemas/feature.schema'
import { Database } from '/lib/database'

export async function retrieveAllFeatures(): Promise<ApiFeaturesReponse | null> {
    try {
        const found = await Database.feature.findMany({
            where: {
                lat: { gt: 0 },
                lon: { gt: 0 },
                type: 'POINT' // for now
            },
            select: {
                createdAt: false,
                updatedAt: false,
                relationsB: false,
                sources: false,
                type: true,

                id: true,
                lat: true,
                lon: true,
                yearStart: true,
                yearEnd: true,
                points: true,

                markerId: true,
                authorId: true,

                // marker: {
                //     select: {
                //         id: true
                //     }
                // },
                relationsF: {
                    select: {
                        id: true
                    }
                }
            }
            // take: 10
        })

        const points: Record<number, any> = {}
        const polygons: Record<number, any> = {}

        const GSON: Record<any, any> = {
            type: 'FeatureCollection',
            features: []
        }

        for (const feature of found) {
            const type = feature.type

            const _data: any = {
                ...feature,
                relationsF: feature.relationsF.map((r) => r.id)
            }

            delete _data.type
            delete _data.yearStart
            delete _data.yearEnd

            if (type === 'POINT') {
                // _data.points = undefined
                delete _data.points
                points[feature.id] = _data

                GSON.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [feature.lon, feature.lat]
                    },
                    properties: {
                        id: feature.id
                    }
                })

                continue
            }

            if (type === 'POLYGON') {
                polygons[feature.id] = _data
            }

            // if (_data.type === 'LINE') {
            // }
        }

        // Retrieve all markers
        const markers = await Database.marker.findMany()

        // Retrieve all authors
        const authors = await Database.author.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return {
            points,
            polygons,

            GSON,
            markers,
            authors
        }
    } catch (error) {
        console.log('error at feature.modal > retrieveAllFeatures', error)
        return null
    }
}

export async function retrieveFeatureBySid(sid: text): Promise<ApiFeature | null> {
    try {
        const f = await Database.feature.findFirst({
            where: {
                sid
            },
            include: {
                occupations: true,
                sources: true,
                author: true,
                contributors: true,
                activities: true
            }
        })

        if (!f) return null

        return JSON.parse(JSON.stringify(f))
    } catch {
        return null
    }
}
