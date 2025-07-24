import { useDidMount } from 'rooks'
import Image, { type StaticImageData } from 'next/image'

import { Meta } from '/components/meta'
import { Header } from '/components/header'
import { Footer } from '/components/footer'

import annurie1 from '/public/img/sources/annurie1.webp'
import annurie2 from '/public/img/sources/annurie2.webp'
import bills1 from '/public/img/sources/bills1.webp'
import bills2 from '/public/img/sources/bills2.webp'
import maps1 from '/public/img/sources/maps1.webp'
import newspaper1 from '/public/img/sources/newspaper1.webp'
import newspaper2 from '/public/img/sources/newspaper2.webp'
import salname1 from '/public/img/sources/salname1.webp'
import salname2 from '/public/img/sources/salname2.webp'
import sourcesIntroback from '/public/img/sources-introback.webp'

import { TransitorService } from '/services/transitor.service'

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
                <p className="ma-sources-section-p">{props.text}</p>
                {props.href ? (
                    <a className="ma-anchor ma-anchor-lines" href={props.href} target="_blank">
                        Visit Source
                    </a>
                ) : undefined}
            </div>
            <div className="ma-sources-section-rhs">
                <div className="ma-sources-section-rhs-pics">
                    {props.pics.map((v) => (
                        <Image key={v.src} className="ma-sources-section-rhs-pics-pic" src={v} alt="" />
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
            <Meta title="Sources" />
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
                    href="https://www.davidrumsey.com/luna/servlet/view/all/what/Ottoman+Mapping?sort=pub_list_no_initialsort%2Cpub_date%2Cpub_list_no%2Cseries_no&os=0&pgs=100&res=1&cic=RUMSEY%7E8%7E1"
                    pics={[maps1]}
                />
                <Source
                    title="Literature and Newspapers"
                    subtitle="via Atatürk Library"
                    text="While creating our Project, we did not ignore the diaries, memoirs, and chapters from novels and newspapers that we classify as literature. Especially for researchers looking for individual experiences in our Project, we will add a layer of emotion to our main map with the data we will extract from various magazines, the diaries and memories of travellers visiting Anatolia, and the analysis of the style and words used in describing the environment in newspapers. This layer will not only show the state of the experience but also serve as a bibliography for researchers and open the door to new discoveries."
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
