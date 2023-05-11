/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/prefer-single-boolean-return */
/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv'
import axios from 'axios'
import { Database } from '../lib/database'
import cliProgress from 'cli-progress'

// load .env
dotenv.config()

const { MAPBOX_SECRET_TOKEN_BACKEND } = process.env
const DATASET_ID = 'clc1osl0501op20pmgv9u9zjr'
const URL_FEATURES = `https://api.mapbox.com/datasets/v1/howion/${DATASET_ID}/features?access_token=${MAPBOX_SECRET_TOKEN_BACKEND}`

async function main() {
    const { data } = await axios.get(URL_FEATURES)
    const { features } = data

    const len = features.length

    console.log('Eklenecek/Yenilenecek kayıt sayısı: ' + len)
    console.log('Feature geojson kaydı yapılıyor...')

    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.rect)
    bar.start(len, 0)

    for (const feature of features) {
        if (!feature || !feature.id || !feature.geometry) continue

        const { properties, geometry } = feature
        const { type, coordinates } = geometry

        const { id } = properties

        if (type === 'Point') {
            // typeof coordinates = [lat, lon] here

            if (id !== 0 && !id) {
                console.log('MAPBOX PROPERTY ID IS NULL OR UNDEFINED')
                console.log('Feature: ' + JSON.stringify(feature))
                continue
            }

            try {
                await Database.feature.update({
                    where: {
                        id: id
                    },
                    data: {
                        type: 'POINT',
                        lat: coordinates[0],
                        lon: coordinates[1],
                        points: coordinates
                    }
                })
            } catch (error) {
                console.log('Error at id: ' + id)
                console.log(error)
            }

            bar.increment(1)
        }
    }

    bar.stop()

    console.log('Done!')
}

main()
export {}
