const isProduction = process.env.NODE_ENV === 'production'

export const App = {
    name: 'Anatolia: 19th Century',
    baseUrl: isProduction ? 'https://anatolia19th.vercel.app' : 'http://localhost:3000',
    isProduction,
    version: '0.0.1',
    defaults: {
        description: '',
        author: 'howion',
        keywords: ['humanities'],
        themeColor: '#00aaff'
    },
    api: {
        baseUrl: isProduction ? 'https://anatolia19th.vercel.app/api' : 'http://localhost:3000/api'
    }
} as const
