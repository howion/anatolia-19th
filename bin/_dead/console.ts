import { Database } from '../lib/database'

async function main() {
    await Database.feature.updateMany({
        where: {},
        data: {
            points: {}
        }
    })
}

main()

export {}
