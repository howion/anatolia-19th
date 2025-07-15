import type { ReactElement } from 'react'
import Document, { type DocumentInitialProps, type DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { Splash } from '/components/splash'

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
                    <link rel="icon" href="/favicon.svg" />
                    <link rel="preload" as="style" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <meta name="theme-color" content="#fbdb40" />
                </Head>
                <body style={{ backgroundColor: '#fff' }}>
                    <Main />
                    <Splash />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
