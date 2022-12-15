import React, { useState } from 'react'
import { Emblem } from './emblem'

interface SplashProps {
    hidden: boolean
}

const DELAY = 1300 + 1500

export function Splash(props: SplashProps): FCReturn {
    const [_timeout, _setTimeout] = useState<NodeJS.Timeout | undefined>(undefined)
    const [_last, _setLast] = useState(!props.hidden)

    if (typeof window !== 'undefined' && window.document && window.document.body) {
        // if (_last !== props.hidden) {
        //     if (_timeout) clearTimeout(_timeout)
        //     _setTimeout(setTimeout(() => {
        // if (_timeout && _last !== props.hidden) clearTimeout(_timeout)
        // if (_last !== props.hidden) _setLast(props.hidden)
        // if (props.hidden) {
        //     document.body.style.overflow = 'hidden'
        // } else {
        //     _setTimeout(setTimeout(() => {
        //         // document.body.style.overflow = props.hidden ? 'overlay' : 'hidden'
        //         // _setLast(!_last)
        //         // _setTimeout(undefined)
        //     }, DELAY))
        // }
        //     _setTimeout(undefined)
        // }, (_last === undefined || _timeout !== undefined) ? 0 : (1300 + 1500)))
        // _setLast(props.hidden)
        // }
    }

    return (
        <div id="ma-splash" className={'ma-splash' + (props.hidden ? ' hidden' : '')}>
            <Emblem h={120} />
        </div>
    )
}
