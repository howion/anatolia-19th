const isProduction = process.env.NODE_ENV === 'production'

export const App = {
    name: 'Anatolia: 19th Century',
    site: 'https://anatolia19.metu.edu.tr',
    baseUrl: isProduction ? 'https://anatolia19th.vercel.app' : 'http://localhost:3000',
    isProduction,
    version: '0.0.1',
    defaults: {
        description:
            'An undergraduate digital humanities project aiming to compile as well as digitize intricate data on the Anatolia in 19th century.',
        author: 'howion',
        keywords: ['digital', 'humanities'],
        themeColor: '#0A3025'
    },
    api: {
        baseUrl: isProduction ? 'https://anatolia19th.vercel.app/api' : 'http://localhost:3000/api'
    }
} as const
