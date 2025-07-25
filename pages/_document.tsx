import type { ReactElement } from 'react'
import Document, { type DocumentInitialProps, type DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { Splash } from '/components/splash'
import { App } from '/constants/app'

/*
 * [TODO:]
 * ADD MANIFEST
 * ADD APPLE-TOUCH ICON
 * ADD MASKABLE ICON
 * ADD META
 * JSIFY MATERIAL-ICON
 */

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>
                    {/*<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>*/}
                    <meta charSet="UTF-8" />
                    <meta name="referrer" content="origin" />

                    <link rel="shortcut icon" href="/favicon.ico" />

                    <meta name="google-site-verification" content="3uSiikrLJvnbsLiVP6LbkwJ8aT163nK7g0juTz8-3eg" />

                    <meta name="application-name" content={App.name} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content={App.name} />
                    <meta name="description" content={App.defaults.description} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#0A3025" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="/favicon.ico" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content={App.site} />
                    <meta name="twitter:title" content={App.name} />
                    <meta name="twitter:description" content={App.defaults.description} />
                    <meta name="twitter:image" content={`${App.site}/og.png`} />
                    <meta name="twitter:creator" content="@19thanatolia" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={App.name} />
                    <meta property="og:description" content={App.defaults.description} />
                    <meta property="og:site_name" content={App.name} />
                    <meta property="og:url" content={App.site} />
                    <meta property="og:image" content={`${App.site}/og.png`} />
                </Head>
                <body>
                    <Main />
                    <Splash />
                    <NextScript />

                    {/* inser material ui css */}
                    <Script
                        id="insert-mui"
                        dangerouslySetInnerHTML={{ __html: `(function(){var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='/material-icons/font.css';link.media='print';link.onload=function(){this.media='all'};document.head.appendChild(link)})();` }}
                    />
                </body>
            </Html>
        )
    }
}
