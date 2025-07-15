// import html2canvas from 'html2canvas'
import { useRef, useState } from 'react'
import { useDidMount } from 'rooks'

// @ts-ignore type module is broken
import cheet from 'cheet.js'
import { hideBodyScroll, showBodyScroll } from '/utils/client.util'

const CHEETS = {
    // aha: 'aha'.split('').join(' '),
    konami: 'up up down down left right left right b a',
    batman: 'batman'.split('').join(' '),
    exit: 'esc'.split('').join(' ')
} as const

const BATMAN_SRC =
    'https://www.youtube.com/embed/R67YWuwKPek?autoplay=1&showinfo=0&controls=0&modestbranding=1&autohide=1&loop=1&playlist=R67YWuwKPek&disablekb=1&rel=0'

const KIRBY_SRC =
    'https://www.youtube.com/embed/Se1uh3PS78Y?autoplay=1&showinfo=0&controls=0&modestbranding=1&autohide=1&loop=1&playlist=Se1uh3PS78Y&disablekb=1&rel=0'

export default function Easter(): FCReturn {
    const [isActive, setIsActive] = useState(false)
    const [didMount, setDidMount] = useState(false)
    const easterRef = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState<keyof typeof CHEETS | ''>('')

    useDidMount(() => {
        // REGISTER CHEATS
        cheet(CHEETS.konami)
        cheet(CHEETS.exit)
        cheet(CHEETS.batman)

        cheet.done((seq: text) => {
            if (seq === CHEETS.exit) {
                setContent('')
                setDidMount(false)
                showBodyScroll()
                return setIsActive(false)
            }
            // if (isActive) return
            if (seq === CHEETS.batman) {
                setContent('batman')
                return setIsActive(true)
            }

            if (seq === CHEETS.konami) {
                setContent('konami')
                return setIsActive(true)
            }
        })
    })

    if (isActive && !didMount) {
        hideBodyScroll()
        setDidMount(true)
    }

    if (!isActive && didMount) {
        showBodyScroll()
        setDidMount(false)
        setContent('')
    }

    return (
        <div ref={easterRef} className={`ma-easter-container${didMount ? ' enabled' : ''}`}>
            <div className="ma-easter-transitor" />
            <div className="ma-easter-content">
                {didMount ? (
                    <>
                        {content === 'batman' ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={BATMAN_SRC}
                                title="Frame"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen={false}
                            />
                        ) : undefined}
                        {content === 'konami' ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={KIRBY_SRC}
                                title="Frame"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen={false}
                            />
                        ) : undefined}
                    </>
                ) : undefined}
            </div>
        </div>
    )
}
