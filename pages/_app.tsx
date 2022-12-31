import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useDidMount } from 'rooks'
import { Meta } from '/components/meta'
import { Transitor } from '/components/transitor'

const Easter = dynamic(() => import('/components/easter'), {
    ssr: false
})

// SCSS
import '/scss/_index.scss'
import { useRef } from 'react'

/* TODO:
 * smooth scroll
 * text effects
 * better 404 page
 * custom pointers
 */

export default function App({ Component, pageProps, router }: FCProps<AppProps>): FCReturn<AppProps> {
    let route = router.route?.split('/')[1].trim() ?? ''
    if (!route) route = 'home'

    const appRef = useRef<HTMLDivElement>(null)

    useDidMount(() => {
        // import('locomotive-scroll').then((LocomotiveScroll) => {
        //     new LocomotiveScroll.default({
        //         el: document.getElementById('app')!,
        //         smooth: true
        //     })
        // })

        const splash = window.document.getElementById('ma-splash')

        if (splash) {
            splash.classList.add('hidden')
            if (route === 'map') splash.style.display = 'none'
        }

        setTimeout(
            () => {
                window.document.body.style.overflow = 'overlay'
            },
            splash ? 2750 : 0
        )
    })

    return (
        <>
            <Meta _viewport={true} />
            <Easter />
            <Transitor />
            <div id="app" ref={appRef} data-scroll-container>
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
