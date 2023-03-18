/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/prefer-single-boolean-return */
/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv'
import axios from 'axios'

// load .env
dotenv.config()

const { MAPBOX_SECRET_TOKEN_BACKEND } = process.env
const DATASET_ID = 'clc1osl0501op20pmgv9u9zjr'
const URL_FEATURES = `https://api.mapbox.com/datasets/v1/howion/${DATASET_ID}/features?access_token=${MAPBOX_SECRET_TOKEN_BACKEND}`

async function main() {
    const { data } = await axios.get(URL_FEATURES)
    const { features } = data

    for (const feature of features) {
        console.log(feature.geometry)
    }
}

main()

export {}
