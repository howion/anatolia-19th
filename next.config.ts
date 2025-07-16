import type { NextConfig } from 'next'
import BundleAnalyzer from '@next/bundle-analyzer'

const isDev = process.env.NODE_ENV !== 'production'
const isAnalyze = process.env.ANALYZE === 'true'

const withBundleAnalyzer = isAnalyze
    ? BundleAnalyzer({
        enabled: true
    })
    : (conf: NextConfig) => conf


// See https://nextjs.org/docs/advanced-features/security-headers
const defaultSecurityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    }
]

const nextConf: NextConfig = {
    compress: true, // disable if proxy already compresses
    trailingSlash: false,
    poweredByHeader: false,
    reactStrictMode: true,
    generateEtags: true,
    devIndicators: false,

    eslint: {
        ignoreDuringBuilds: true
    },

    async headers() {
        if (isDev) {
            return []
        }

        return [
            {
                source: '/:path*', // all paths
                headers: defaultSecurityHeaders
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/map',
                destination: '/map/index',
                permanent: true
            }
        ]
    },
    experimental: {
        largePageDataBytes: 1 * 10 ** 6 // 1 MB
        //     optimizeCss: true,
    }
}

export default withBundleAnalyzer(nextConf)
