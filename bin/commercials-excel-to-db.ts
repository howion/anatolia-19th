/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/prefer-single-boolean-return */
/* eslint-disable prettier/prettier */
import readXlsxFile from 'read-excel-file/node'
import { Database } from '../lib/database'
import cliProgress from 'cli-progress'
import slugify from 'slugify'

const COMMERCIAL1889 = './bin/excels/commercial1889.xlsx'

function isNullish(val: any): boolean {
    if (typeof val === 'string') {
        val = val.trim()
        if (val === '?' || !val) return true
    }

    if (val === null || val === undefined) return true

    return false
}

async function main() {
    const rows = await readXlsxFile(COMMERCIAL1889)
    const knownOccupations = []
    const relationMap: Record<number, number[]> = {}
    const numberOfRecords = rows.length - 1
    const pinpointUpserts = []

    try {
        console.log('Eklenecek/Yenilenecek Kayıt Sayısı: ' + numberOfRecords)
        console.log('Pinpoint ilk kayıtları yapılıyor...')
        const barPinpointUpserts = new cliProgress.SingleBar({}, cliProgress.Presets.rect)
        barPinpointUpserts.start(numberOfRecords, 0)

        for (const i in rows) {
            const row = rows[i]
            const id = Number.parseInt(i) + 1

            // Header
            if (i === '0') continue

            // eslint-disable-next-line prefer-const
            let [name, province, year, _occupation, _, _sources, _relations, _address] = row

            // normalize values
            name = String(name).trim()
            province = String(province).trim() // vilayet not modern provinces
            year = Number.parseInt(String(year).trim())
            _occupation = String(_occupation ?? '').trim()
            _sources = String(_sources ?? '').trim()
            _relations = String(_relations ?? '').trim()
            _address = String(_address ?? '').trim()

            if (Number.isNaN(year)) {
                console.log(`Year is NaN: ${year} for the row with id: ${id}`)
                continue
            }

            // transpile values to their proper formats
            const relations = _relations
                .split(',')
                .map((r: string) => String(r).trim())
                .filter((r) => !!r)
                .map((r) => Number.parseInt(r))
            // const sources = _sources.split('/').map((r: string) => Number.parseInt(String(r).trim()))
            const occupations = _occupation
                .split(',')
                .map((r: string) => String(r).trim())
                .map((o) => ({
                    where: {
                        name: o
                    },
                    create: {
                        name: o
                    }
                }))

            relationMap[id] = relations

            const slug = slugify(name, {
                replacement: '-',
                strict: true,
                remove: undefined,
                trim: true,
                locale: 'en',
                lower: true,
            }) + `-${id}`

            await Database.pinpoint.upsert({
                where: { id },
                update: {
                    yearStart: 1889,
                    lat: 0,
                    lon: 0,
                    name,
                    slug,
                    occupations: {
                        connectOrCreate: occupations
                    },
                    sources: {
                        connect: {
                            shortName: 'AC1889'
                        }
                    }
                },
                create: {
                    id,
                    yearStart: 1889,
                    lat: 0,
                    lon: 0,
                    name,
                    slug,
                    markerId: 1,
                    occupations: {
                        connectOrCreate: occupations
                    },
                    sources: {
                        connect: {
                            shortName: 'AC1889'
                        }
                    }
                }
            })

            barPinpointUpserts.update(id)
        }

        barPinpointUpserts.stop()

        // await Database.$transaction(pinpointUpserts)
        console.log('Başarılı!')
    } catch (error) {
        console.log('Hata:')
        console.log(error)
        return
    }

    try {
        console.log('Relation kayıtları yapılıyor...')
        const barRelationUpdates = new cliProgress.SingleBar({}, cliProgress.Presets.rect)
        barRelationUpdates.start(Object.keys(relationMap).length, 0)

        let i = 0

        for (const _id in relationMap) {
            const id = Number.parseInt(_id)
            const rels = relationMap[id].map((r) => ({ id: r }))

            await Database.pinpoint.update({
                where: {
                    id
                },
                data: {
                    relationsF: {
                        connect: rels
                    }
                }
            })

            barRelationUpdates.update(++i)
        }

        barRelationUpdates.stop()

        console.log('Başarılı!')
    } catch (error) {
        console.log('Hata:')
        console.log(error)
        return
    }

    console.log('Bitti!')
}

main()

export {}
