import React from 'react'
import { Emblem } from '/components/emblem'

interface NavbarProps {}

export function Navbar(props: NavbarProps): FCReturn<NavbarProps> {
    return (
        <header className="ma-navbar">
            <Emblem h={72} />
            <button>
                <i className="material-icons">add</i>
                <span>SUBMIT DATA</span>
            </button>
        </header>
    )
}
