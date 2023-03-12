import React from 'react'
import { Meta } from '/components/meta'
import Image, { StaticImageData } from 'next/image'

import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

import { Anchor } from '/components/anchor'
import { Header } from '/components/header'
import { Footer } from '/components/footer'

import annurie1 from '/public/img/sources/annurie1.jpg'
import annurie2 from '/public/img/sources/annurie2.jpg'
import bills1 from '/public/img/sources/bills1.jpg'
import bills2 from '/public/img/sources/bills2.jpg'
import maps1 from '/public/img/sources/maps1.jpg'
import newspaper1 from '/public/img/sources/newspaper1.jpg'
import newspaper2 from '/public/img/sources/newspaper2.jpg'
import salname1 from '/public/img/sources/salname1.jpg'
import salname2 from '/public/img/sources/salname2.jpg'
import sourcesIntroback from '/public/img/sources-introback.jpg'

interface SourceProps {
    title: any
    subtitle?: text
    pics: StaticImageData[]
    text: text
    href?: text
}

export function Source(props: SourceProps): FCReturn {
    return (
        <section className="ma-sources-section">
            <div className="ma-sources-section-lhs">
                <h2 className="ma-sources-section-lhs-title">{props.title}</h2>
                {props.subtitle ? <h3 className="ma-sources-section-lhs-subtitle">{props.subtitle}</h3> : undefined}
                <p>{props.text}</p>
                {props.href ? (
                    <a className="ma-anchor ma-anchor-underline" href={props.href} target="_blank">
                        Visit Source
                    </a>
                ) : undefined}
            </div>
            <div className="ma-sources-section-rhs">
                <div className="ma-sources-section-rhs-pics">
                    {props.pics.map((v, i) => (
                        <Image className="ma-sources-section-rhs-pics-pic" src={v} key={i} alt="" />
                    ))}
                </div>
            </div>
        </section>
    )
}

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
                <Source
                    title="Annuaire Oriental"
                    subtitle="via SALT Online"
                    text="Annuaire Orientals contain Oriental Guides designed to introduce prominent local and foreign entrepreneurs to traders in the Ottoman Empire and the Republic of Turkey centres. It is vital for researchers focusing on commercial activities in the Ottoman in the second half of the 19th century and in Turkey until the 1940s. Our collection furthermore includes government yearbooks and other annuals on financial and medical matters. For our Project, we turn nearly 30 annuals into an Excel database and make them accessible on the map. We also chart the names we have information about which we can relate to. This way, relationships between many data groups from commercial partners to bank employees, are created and visualised."
                    href="https://archives.saltresearch.org/handle/123456789/2301"
                    pics={[annurie2, annurie1]}
                />
                <Source
                    title="Salname's"
                    subtitle="via İSAM"
                    text="Starting from the second half of the 19th century, the Ottoman Empire began to print annuals in its provinces, providing data on the geography, socio-economic structure of that region and the investments made by the state (e.g., bridge, school, and public buildings). Although this was done in motion for some provinces, only two or three Salnames of some provinces were published and survived. Aydın Provincial Salname, Adana Provincial Salname, and Ordu Provincial Salname, published with Enverî letters written at the beginning of the twentieth century, can be given as examples. The Islamic Studies Centre has an extensive collection in its database."
                    href="http://ktp.isam.org.tr/?url=salname"
                    pics={[salname1, salname2]}
                />
                <Source
                    title="Maps"
                    subtitle="via SALT Online"
                    text="In 80 years, from the 1850s to the 1930s, which we examined in our Project, the Anatolian map has undergone many physical, political and social transformations. We focus on these transformations and show the data we obtained from more than seventy maps in the French National Library, David Ramsey Map Collection and Ottoman State Archives on the main map of our Project in layers. In this context, we aim to both facilitate the work of researchers working in different disciplines and inspire more micro-scale studies."
                    href="https://archives.saltresearch.org/handle/123456789/2301"
                    pics={[maps1]}
                />
                <Source
                    title="Literature and Newspapers"
                    subtitle="via Atatürk Library"
                    text="In 80 years, from the 1850s to the 1930s, which we examined in our Project, the Anatolian map has undergone many physical, political and social transformations. We focus on these transformations and show the data we obtained from more than seventy maps in the French National Library, David Ramsey Map Collection and Ottoman State Archives on the main map of our Project in layers. In this context, we aim to both facilitate the work of researchers working in different disciplines and inspire more micro-scale studies."
                    pics={[newspaper1, newspaper2]}
                />
                <Source
                    title="Bills, Edicts, Reports"
                    text="Many academic publications have been made over the years on the contractor companies and the state giving concessions for the natural resources around the railway lines in Anatolia. Under the guidance of academic publications, we compile from primary sources such as edicts and bills, transform them into data and make them visible on our map. We customise the types of data as much as the documents allow. In this way, we also reveal, for example, the vegetation of Anatolia or the density of regional mines in the period we are examining."
                    pics={[bills1, bills2]}
                />
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
