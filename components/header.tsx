import React from 'react'
import { Navbar } from './navbar'

// IMAGES
import Image from 'next/image'
import homeIntroback from '/public/img/home-introback.jpg'

interface HeaderProps {}

export function Header(props: HeaderProps): FCReturn<HeaderProps> {
    return (
        <header className="ma-header">
            <div className="ma-mwcontainer">
                <Navbar />
                <h1>The 19th Century Anatolia Project — Web Portal</h1>
                <p className="ma-header-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="ma-header-back">
                <Image className="ma-header-img" src={homeIntroback} alt="" />
                {/* <img src="/img/home-headerback.svg" alt="" /> */}
            </div>
        </header>
    )
}
