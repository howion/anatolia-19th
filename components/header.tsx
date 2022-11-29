import React from 'react'
import { Emblem } from '/components/emblem'

interface HeaderProps {}

export function Header(props: HeaderProps): FCReturn {
    return (
        <div className="ma-header">
            <Emblem h={72}/>
            <button>
                <i className="material-icons">add</i>
                <span>SUBMIT DATA</span>
            </button>
        </div>
    )
}
