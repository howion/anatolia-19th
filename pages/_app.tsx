import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useDidMount } from 'rooks'
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

export default function App({ Component, pageProps, router }: FCProps<AppProps>): FCReturn<AppProps> {
    let route = router.route?.split('/')[1].trim() ?? ''
    if (!route) route = 'home'

    useDidMount(() => {
        const splash = window.document.getElementById('ma-splash')
        if (splash) {
            splash.classList.add('hidden')
            if (route === 'map') splash.style.display = 'none'
        }
        setTimeout(() => (window.document.body.style.overflow = 'overlay'), splash ? 2750 : 0)
    })

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
