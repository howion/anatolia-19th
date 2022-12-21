// import html2canvas from 'html2canvas'
import React, { useRef, useState } from 'react'
import { useDidMount } from 'rooks'

// @ts-ignore type module is broken
import cheet from 'cheet.js'
import { ClientUtil } from '/utils/client.util'

// async function capture(): Promise<HTMLCanvasElement> {
//     return await html2canvas(document.body, {
//         y: window.scrollY
//     })
// }

// function cloneCanvas(oldCanvas: HTMLCanvasElement): HTMLCanvasElement {
//     const newCanvas = document.createElement('canvas')
//     const context = newCanvas.getContext('2d')

//     newCanvas.width = oldCanvas.width
//     newCanvas.height = oldCanvas.height

//     context!.drawImage(oldCanvas, 0, 0)

//     return newCanvas
// }

// if (isActive && canvas === undefined) {
//     // eslint-disable-next-line unicorn/no-null
//     // setCanvas(null)
//     // capture().then((c) => setCanvas(c))
//     console.log('hi')
// }

// if (!isActive && canvas) {
//     setCanvas(undefined)
// }

// if (canvas && !didMount) {
//     setDidMount(true)
//     window.document.body.style.overflow = 'hidden'
//     // leftRef.current?.appendChild(canvas)
//     // rightRef.current?.appendChild(cloneCanvas(canvas))
// }

const CHEETS = {
    // aha: 'aha'.split('').join(' '),
    batman: 'batman'.split('').join(' '),
    exit: 'esc'.split('').join(' ')
} as const

// eslint-disable-next-line max-len
const BATMAN_SRC =
    'https://www.youtube.com/embed/R67YWuwKPek?autoplay=1&showinfo=0&controls=0&modestbranding=1&autohide=1&loop=1&playlist=R67YWuwKPek&disablekb=1&rel=0'

export default function Easter(): FCReturn {
    const [isActive, setIsActive] = useState(false)
    const [didMount, setDidMount] = useState(false)
    const easterRef = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState('')

    useDidMount(() => {
        // REGISTER CHEATS
        cheet(CHEETS.exit)
        cheet(CHEETS.batman)

        cheet.done((seq: text) => {
            if (seq === CHEETS.exit) {
                setContent('')
                setDidMount(false)
                ClientUtil.showBodyScroll()
                return setIsActive(false)
            }
            if (isActive) return
            if (seq === CHEETS.batman) {
                setContent('batman')
                return setIsActive(true)
            }
        })
    })

    if (isActive && !didMount) {
        ClientUtil.hideBodyScroll()
        setDidMount(true)
    }

    if (!isActive && didMount) {
        ClientUtil.showBodyScroll()
        setDidMount(false)
        setContent('')
    }

    return (
        <div ref={easterRef} className={'ma-easter-container' + (didMount ? ' enabled' : '')}>
            <div className="ma-easter-transitor" />
            <div className="ma-easter-content">
                {didMount ? (
                    <>
                        {content === 'batman' ? (
                            <>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={BATMAN_SRC}
                                    title=""
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen={false}
                                />
                            </>
                        ) : undefined}
                    </>
                ) : undefined}
            </div>
        </div>
    )
}
