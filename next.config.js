const isDev = process.env.NODE_ENV !== 'production'

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
    // this is handlend within _document.tsx
    // {
    //     key: 'Content-Security-Policy',
    //     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    // },
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
    // {
    //     key: 'Permissions-Policy',
    //     value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
    // }
]

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    compress: true, // disable if proxy already compresses
    optimizeFonts: true,
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
    }
    // experimental: {
    //     optimizeCss: true,
    // }
    // webpack: (config, options) => {
    //     config.plugins.push(new StylelintPlugin())
    //     return config
    // }
}
