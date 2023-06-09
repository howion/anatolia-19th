import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod } from '/utils/api.util'
import { Database } from '/lib/database'
import { ApiFeaturesReponse } from '/constants/schemas/feature.schema'

export default async function Handle(req: ApiRequest, res: ApiResponse<ApiFeaturesReponse>): Promise<void> {
    // await CORS(req, res)
    //--------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

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
                relationsF: feature.relationsF.map((r) => r.id),

                // we already categorize features here
                type: undefined,

                yearStart: undefined, // todo
                yearEnd: undefined // todo
            }

            if (type === 'POINT') {
                _data.points = undefined
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

        return res.status(HTTPStatusCode.OK).json({
            success: true,
            data: {
                points,
                polygons,

                GSON,
                markers,
                authors
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(HTTPStatusCode.InternalServerError).json({
            success: false,
            error
        })
    }
}
