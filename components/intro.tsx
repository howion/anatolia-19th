import React from 'react'
import { Header } from './header'

// IMAGES
import Image from 'next/image'
import homeIntroback from '/public/img/home-introback.jpg'

interface IntroProps {}

export function Intro(props: IntroProps): FCReturn {
    return (
        <div className="ma-intro">
            <div className="ma-mwcontainer">
                <Header />
                <h1>The 19th Century Anatolia Project — Web Portal</h1>
                <p className="ma-intro-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="ma-intro-back">
                <Image className="ma-intro-img" src={homeIntroback} alt="" />
                {/* <img src="/img/home-introback.svg" alt="" /> */}
            </div>
        </div>
    )
}
