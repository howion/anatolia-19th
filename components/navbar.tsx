import React from 'react'
import { Anchor } from './anchor'
import { Emblem } from '/components/emblem'

interface NavbarProps {}

export function Navbar(props: NavbarProps): FCReturn<NavbarProps> {
    return (
        <header className="ma-navbar">
            <Anchor href="/" animate>
                <Emblem h={72} />
            </Anchor>
            <Anchor href="/contact" animate>
                <button className="btn btn-round">
                    {/* <i className="material-icons">add</i> */}
                    <span>SUBMIT DATA</span>
                </button>
            </Anchor>
        </header>
    )
}
