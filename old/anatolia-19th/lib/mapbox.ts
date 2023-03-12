import axios from 'axios'

const DATASET_ID = 'clc1osl0501op20pmgv9u9zjr'

export class Mapbox {
    public static async retrieveDatasetFeatures(): Promise<any> {
        try {
            const res = await axios.get(`https://api.mapbox.com/datasets/v1/howion/${DATASET_ID}/features`, {
                params: {
                    access_token: process.env.MAPBOX_SECRET_TOKEN_BACKEND
                }
            })

            return res.data
        } catch {
            return null
        }
    }
}
