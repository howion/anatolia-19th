import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
// import { Splash } from '@components/splash'

/*
 * [TODO:]
 * ADD MANIFEST
 * ADD SPLASH
 * ADD THEME COLOR
 * ADD APPLE-TOUCH ICON
 * ADD MASKABLE ICON
 * ADD META
 * REDIRECT HTTP TO HTTPS
 */

/* eslint max-len: 0 */
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
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
                    />
                    <link rel="preload" as="style" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                </Head>
                <body style={{ backgroundColor: '#fff' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
