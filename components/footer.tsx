import React from 'react'
import { Emblem } from '/components/emblem'

interface FooterProps {}

export function Footer(props: FooterProps): FCReturn {
    return (
        <footer className="ma-footer">
            <div className="ma-mwcontainer">
                <Emblem h={72} textFill="#FFF" />
            </div>
        </footer>
    )
}
