import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Meta } from '/components/meta'

const Easter = dynamic(() => import('/components/easter'), {
    ssr: false
})

// SCSS
import '/scss/_index.scss'

/* TODO:
 * smooth scroll
 * mouse
 * text effects
 */

export default function App({ Component, pageProps, router }: FCProps<AppProps>): FCReturn {
    let route = router.route?.split('/')[1].trim() ?? ''
    if (!route) route = 'home'

    return (
        <>
            <Meta _viewport={true} />
            <Easter />
            <div id="app">
                {/*<FancyCursorProvider>
                    <FancyCursor className="app-cursor-inner"/>
                    <FancyCursor className="app-cursor-outer"/>
                </FancyCursorProvider>*/}
                {/* <Splash /> */}
                {/* <Modal /> */}
                <main id={'app-main-' + route}>
                    {/* <Navbar /> */}
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    )
}
