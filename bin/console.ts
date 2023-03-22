/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/prefer-single-boolean-return */

import { Database } from '../lib/database'

/* eslint-disable prettier/prettier */
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
