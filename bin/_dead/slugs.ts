/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/prefer-single-boolean-return */
/* eslint-disable prettier/prettier */
import { Database } from '../lib/database'
import cliProgress from 'cli-progress'
import slugify from 'slugify'

async function main() {
    try {
        const features = await Database.feature.findMany()
        console.log('# of records: ' + features.length)
        console.log('Please wait, computing the batch...')

        const cliBar = new cliProgress.SingleBar({}, cliProgress.Presets.rect)
        cliBar.start(features.length, 0)

        for (const feature of features) {
            let sid = feature.name

            if (feature.yearStart) sid += '-' + feature.yearStart

            let i = 0
            while (true) {
                const h = features.find((s) => s.sid === sid)
                if (!h || h.id === feature.id) break
                sid += '-' + ++i
            }

            sid = slugify(sid, {
                replacement: '-',
                lower: true,
                strict: true,
                locale: 'en',
                trim: true
            })

            await Database.feature.update({
                where: {
                    id: feature.id
                },
                data: {
                    sid: sid
                }
            })

            cliBar.increment()
        }

        cliBar.stop()

        console.log('Finished!')
        return
    } catch (error) {
        console.log('Error:', error)
    }
}

main()

export {}
