import * as dotenv from 'dotenv'
import autoML from '@google-cloud/language'
import { google } from 'googleapis'

export const SCOPES = ['https://www.googleapis.com/auth/cloud-language']

// load .env
dotenv.config()

const { GOOGLE_CLIENT_EMAIL, GOOGLE_PROJECT_ID, GOOGLE_PRIVATE_KEY } = process.env

export async function getAuthToken() {
    const { private_key } = JSON.parse(GOOGLE_PRIVATE_KEY || '{ privateKey: null }')

    // console.log('priv', private_key)

    const auth = new google.auth.GoogleAuth({
        scopes: SCOPES,
        projectId: GOOGLE_PROJECT_ID,
        credentials: {
            private_key: private_key,
            client_email: GOOGLE_CLIENT_EMAIL
        }
    })

    return await auth.getClient()
}

async function main(): Promise<void> {
    // const { privateKey } = JSON.parse(GCLOUD_AUTH_JSON || '{ privateKey: null }')
    // const auth = new google.auth.GoogleAuth({
    //     //   scopes: SCOPES,
    //     projectId: process.env.GOOGLE_PROJECTID,
    //     credentials: {
    //         private_key: privateKey,
    //         client_email: process.env.GOOGLE_CLIENT_EMAIL
    //     }
    // })

    console.log(await getAuthToken())

    // return

    const autoMLClient = new autoML.LanguageServiceClient({
        authClient: (await getAuthToken()) as any
        // projectId: 'anatolia19',
        // key: 'AIzaSyCXTWLVnNyiKtY6qB8p5yv9JhkN2TdeZek'
    })

    const document = {
        content: 'When I pass around via train the city Konya, there was a horrible smeel.',
        type: 'PLAIN_TEXT' as const
    }

    // Detects the sentiment of the text
    const result = await autoMLClient.analyzeSentiment({
        document
    })
    console.log('result: ')
    console.log(JSON.stringify(result))
    // const sentiment = result.documentSentiment

    // console.log(`Text: ${text}`)
    // console.log(`Sentiment score: ${sentiment.score}`)
    // console.log(`Sentiment magnitude: ${sentiment.magnitude}`)
}

main()
