import { Database } from '/lib/database'

export async function retrieveStats(): Promise<any> {
    try {
        const [entries, lastEntry, lastUpdate] = await Promise.all([
            Database.feature.count(),
            Database.feature
                .findMany({
                    select: {
                        id: true,
                        name: true,
                        occupations: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1
                })
                .then((s) => s[0]),
            Database.feature
                .findMany({
                    select: {
                        id: true,
                        updatedAt: true
                    },
                    orderBy: {
                        updatedAt: 'desc'
                    },
                    take: 1
                })
                .then((s) => s[0].updatedAt.toISOString())
        ])

        return {
            entries,
            lastEntry,
            lastUpdate,
            contributors: 0
        }
    } catch (error) {
        console.log('error at feature.modal > retrieveAllFeatures', error)
        return null
    }
}
