import Image from 'next/image'
import { Meta } from '/components/meta'

import { Header } from '../components/header'

import { useState } from 'react'
import { Splash } from '/components/splash'

import odtuLogo from '/public/img/sponsor/odtu.png'
// import adimOdtuLogo from '/public/img/sponsor/adimodtu.png'
import saltLogo from '/public/img/sponsor/salt.svg'
import sarkTicaret from '/public/img/sark_ticaret.png'
import { Footer } from '/components/footer'

interface ProjectProps {
    disabled?: boolean
    src: text
    txt: text
}

function Project(props: ProjectProps): FCReturn {
    return (
        <div className={'ma-home-projects-project-container' + (props.disabled ? ' disabled' : '')}>
            <div
                className="ma-home-projects-project-cover"
                style={{
                    backgroundImage: `url("${props.src}")`
                }}
            />
            <span className="ma-home-projects-project-label">{props.txt}</span>
            {/* <Image className="ma-home-projects-project-img" src={props.src} alt={props.txt} /> */}
        </div>
    )
}

interface PersonProps {
    // name: text
    // title: text
}

function Person(props: PersonProps): FCReturn {
    return (
        <div className="ma-home-people-card">
        </div>
    )
}

interface AccordionItemProps {}

function AccordionItem(props: PersonProps): FCReturn {
    return (
        null
    )
}

export default function Home(): FCReturn {
    const [h, setH] = useState(false)

    return (
        <>
            <Meta />
            <Header />
            <div onClick={() => setH(!h)}>
                <Splash hidden={h} />
            </div>
            <div className="ma-mwcontainer">
                {/* SEARCH */}
                <section className="ma-home-search-container">
                    <input
                        className="ma-home-search-input"
                        placeholder="Search in the 19th Century Anatolia Project Database..."
                        type="text"
                    />
                    <i className="ma-home-search-i material-icons">search</i>
                    <div className="focuser"></div>
                </section>

                {/* PROJECTS */}
                <section className="ma-home-projects-container">
                    <div className="ma-home-projects-label">OUR PROJECTS</div>
                    <Project src="/img/projects/sources.jpg" txt="Sources" disabled />
                    <Project src="/img/projects/digital_map.jpg" txt="Digital Map"/>
                    <Project src="/img/projects/graphs.jpg" txt="Graphs" disabled />
                    <Project src="/img/projects/explore_anatolia.jpg" txt="Explore Anatolia" disabled />
                </section>

                {/* SPONSORS */}
                <section className="ma-home-sponsors-container">
                    <Image
                        className="ma-home-sponsors-back"
                        src={sarkTicaret}
                        alt=""
                    />
                    <h2 className="ma-section-title s1 c1">
                        <span>01</span>Project Sponsors
                    </h2>
                    <div className="ma-home-sponsors-list">
                        <Image
                            className="ma-home-sponsors-sponsor"
                            height={64}
                            src={odtuLogo}
                            alt=""
                        />
                        <Image
                            className="ma-home-sponsors-sponsor"
                            height={64}
                            src={saltLogo}
                            alt=""
                        />
                        {/* <Image className="ma-home-sponsors-sponsor" src="/sponsor/adimodtu.png" alt=""/> */}
                        {/* <Image className="ma-home-sponsors-sponsor" src="/sponsor/salt.svg" alt=""/> */}
                    </div>
                </section>
            </div>

            {/* STATS */}
            <section className="ma-home-stats-container">
                <div className="ma-home-stats-back" />
                <div className="ma-mwcontainer">
                </div>
            </section>

            <div className="ma-mwcontainer">
                <div className="ma-home-people-wrapper">
                    <h2 className="ma-section-title s2 c2">
                        <span>02</span>People
                    </h2>
                    {/* <div className="ma-home-people-grid">
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                    </div> */}

                    <div className="ma-home-faq-wrapper">
                        <h2 className="ma-section-title s3 c3">
                            <span>03</span>Frequently Asked Questions
                        </h2>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <Footer />
        </>
    )
}
