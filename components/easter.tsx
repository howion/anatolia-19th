// import html2canvas from 'html2canvas'
import React, { useRef, useState } from 'react'
import { useDidMount } from 'rooks'

// @ts-ignore type module is broken
import cheet from 'cheet.js'

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
    aha: 'a h a',
    exit: 'e s c'
} as const

export default function Easter(): FCReturn {
    const [isActive, setIsActive] = useState(false)
    // const [canvas, setCanvas] = useState<HTMLCanvasElement | undefined | null>(undefined)
    const [didMount, setDidMount] = useState(false)

    const easterRef = useRef<HTMLDivElement>(null)
    // const leftRef = useRef<HTMLDivElement>(null)
    // const rightRef = useRef<HTMLDivElement>(null)

    useDidMount(() => {
        cheet(CHEETS.exit)
        cheet(CHEETS.aha)

        cheet.done((seq: text) => {
            if (seq === CHEETS.aha) return setIsActive(true)
            if (seq === CHEETS.exit) return setIsActive(false)
        })
    })

    if (isActive && !didMount) {
        window.document.body.style.overflow = 'hidden'
        setDidMount(true)
    }

    if (!isActive && didMount) {
        window.document.body.style.overflow = ''
        setDidMount(false)
    }

    return (
        <div ref={easterRef} className={'ma-easter-container' + (didMount ? ' enabled' : '')}>
            {/* <div ref={leftRef} className="ma-easter-left"></div> */}
            {/* <div ref={rightRef} className="ma-easter-right"></div> */}
        </div>
    )
}
