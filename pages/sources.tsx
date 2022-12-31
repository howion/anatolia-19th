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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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
