import React from 'react'
import { Navbar } from './navbar'

// IMAGES
import Image, { StaticImageData } from 'next/image'

interface HeaderProps {
    headerImage: StaticImageData
    text: text
    subtitle: text
}

export function Header(props: HeaderProps): FCReturn<HeaderProps> {
    return (
        <header className="ma-header" data-scroll-section>
            <div className="ma-mwcontainer">
                <Navbar />
                <h1>The 19th Century Anatolia Project — {props.subtitle}</h1>
                <p className="ma-header-p">{props.text}</p>
            </div>
            <div className="ma-header-back">
                <Image className="ma-header-img" src={props.headerImage} alt="" />
                {/* <img src="/img/home-headerback.svg" alt="" /> */}
            </div>
        </header>
    )
}
