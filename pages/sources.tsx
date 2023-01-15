import React from 'react'
import { Meta } from '/components/meta'

// IMAGES

import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

import { Anchor } from '/components/anchor'
import { Header } from '/components/header'
import { Footer } from '/components/footer'

import sourcesIntroback from '/public/img/sources-introback.jpg'

export default function Sources(): FCReturn {
    useDidMount(() => {
        TransitorService.hideTransitor()
    })

    return (
        <>
            <Meta />
            <Header
                headerImage={sourcesIntroback}
                subtitle="Sources"
                text="Here, at Anatolia 19th, we make use of various sources ranging from foreign and Ottoman documents to visuals in order to translate, datafy, and digitilize them in a single, online bibliography accessible for free through this website."
            />
            <div className="ma-mwcontainer">
                <div className="ma-sources-section">
                    <div className="ma-sources-section-lhs">
                        <h2 className="ma-section-title c1 s1"><sup>::</sup> Commercials_</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="https://archives.saltresearch.org/handle/123456789/2301" target="_blank"><button data-button-label="SALT Online">Source Homepage<i className="material-icons">open_in_new</i></button></a>
                    </div>
                    <div className="ma-sources-section-rhs">
                        <div className="ma-sources-section-source"></div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

            <Footer />
        </>
    )
}
