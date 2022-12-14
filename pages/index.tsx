import React from 'react'
import Image from 'next/image'
import { Meta } from '/components/meta'
import { Header } from '/components/header'

// IMAGES
// import adimOdtuLogo from '/public/img/sponsor/adimodtu.png'
import { Footer } from '/components/footer'
import { Accordion, AccordionContainer } from '/components/accordion'
import { Anchor } from '/components/anchor'
import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

import odtuLogo from '/public/img/sponsor/odtu.png'
import saltLogo from '/public/img/sponsor/salt.svg'

import homeIntroback from '/public/img/home-introback.jpg'
import sarkTicaret from '/public/img/sark_ticaret.png'

import peopleSelcuk from '/public/img/people/selcuk.png'
import peopleEbru from '/public/img/people/ebru.png'
import peopleAgah from '/public/img/people/agah.png'
import peopleKadri from '/public/img/people/kadri.png'
import peopleRasit from '/public/img/people/rasit.png'
import peopleDoga from '/public/img/people/doga.png'
import peopleMert from '/public/img/people/mert.png'

interface ProjectProps {
    disabled?: boolean
    href?: text
    src: text
    txt: text
}

function Project(props: ProjectProps): FCReturn<ProjectProps> {
    return (
        <Anchor
            href={props.href ?? '#'}
            className={'ma-home-projects-project-container' + (props.disabled ? ' disabled' : '')}
            animate
        >
            <div
                className="ma-home-projects-project-cover"
                style={{
                    backgroundImage: `url("${props.src}")`
                }}
            />
            <span className="ma-home-projects-project-label">{props.txt}</span>
        </Anchor>
    )
}

interface PersonProps {
    src: any
    name: text
    role: text
}

function Person(props: PersonProps): FCReturn<PersonProps> {
    return (
        <div className="ma-home-people-card">
            <Image className="ma-home-people-card-img" src={props.src} alt="" />
            <span className="ma-home-people-card-name">{props.name}</span>
            <span className="ma-home-people-card-role">{props.role}</span>
        </div>
    )
}

export default function Home(): FCReturn {
    useDidMount(() => {
        TransitorService.hideTransitor()
    })

    return (
        <>
            <Meta />
            <Header
                headerImage={homeIntroback}
                subtitle="Web Portal"
                // eslint-disable-next-line max-len
                text="Welcome to the 19th Century Anatolia Project???s website. An undergraduate digital humanities project aiming to compile as well as digitize intricate data on the region in this century, Anatolia19 here presents its latest work."
            />
            <div className="ma-mwcontainer">
                {/* SEARCH */}
                <section className="ma-home-search-container">
                    <input
                        className="ma-home-search-input"
                        placeholder="Search in the 19th Century Anatolia Project Database..."
                        type="text"
                    />
                    <i className="material-icons ma-home-search-i">search</i>
                    <div className="focuser"></div>
                </section>

                {/* PROJECTS */}
                <section className="ma-home-projects-container">
                    <div className="ma-home-projects-label">OUR PROJECTS</div>
                    <Project src="/img/projects/sources.jpg" txt="Sources" href="/sources" />
                    <Project src="/img/projects/digital_map.jpg" txt="Digital Map" href="/map" />
                    <Project src="/img/projects/graphs.jpg" txt="Graphs" href="/graphs" />
                    <Project src="/img/projects/explore_anatolia.jpg" txt="Explore Anatolia" disabled />
                </section>

                {/* SPONSORS */}
                <section className="ma-home-sponsors-container">
                    <Image className="ma-home-sponsors-back" src={sarkTicaret} alt="" />
                    <h2 className="ma-section-title s1 c1">
                        <span>01</span>Project Sponsors
                    </h2>
                    <div className="ma-home-sponsors-list">
                        <Image className="ma-home-sponsors-sponsor" height={64} src={odtuLogo} alt="" />
                        <Image className="ma-home-sponsors-sponsor" height={64} src={saltLogo} alt="" />
                        {/* <Image className="ma-home-sponsors-sponsor" src="/sponsor/adimodtu.png" alt=""/> */}
                        {/* <Image className="ma-home-sponsors-sponsor" src="/sponsor/salt.svg" alt=""/> */}
                    </div>
                </section>
            </div>

            {/* STATS */}
            <section className="ma-home-stats-container">
                {/* <div className="ma-home-stats-back" /> */}
                <div className="ma-mwcontainer"></div>
            </section>

            <div className="ma-mwcontainer">
                <div className="ma-home-people-wrapper">
                    <h2 className="ma-section-title s2 c2">
                        <span>02</span>People
                    </h2>
                    <div className="ma-home-people-grid">
                        <Person name="Sel??uk Dursun" role="Supervisor" src={peopleSelcuk} />
                        <Person name="Ebru Boyar" role="Supervisor" src={peopleEbru} />
                        <Person name="Agah Enes Yasa" role="Founder & Coordinator" src={peopleAgah} />
                        <Person
                            name="Mustafa Kadri Yekeler"
                            role="Founder & Ottoman Turkish Translator"
                            src={peopleKadri}
                        />
                        {/* <Person name="Zelal Deniz Erdo??an" role="Editor (Until 2022)" src={peopleZelal} /> */}
                        <Person name="Ra??it Alp Atasoy" role="Ottoman Turkish Translator" src={peopleRasit} />
                        <Person name="A. Do??a Ayd??n" role="Secondary Source Researcher" src={peopleDoga} />
                        <Person name="??mer Mert Co??kun" role="Developer" src={peopleMert} />
                    </div>

                    <div className="ma-home-faq-wrapper">
                        <h2 className="ma-section-title s3 c3">
                            <span>03</span>Frequently Asked Questions
                        </h2>

                        <AccordionContainer>
                            <Accordion title="Why are you doing this project?" active>
                                <p>The 19th century is an era of transformation all over the world, the ground upon which the world we now live in was constructed. In the particular case of the Ottoman Empire, the reign of Sultan Abdulaziz and Abdulhamid II signified the start of the prosperity of Anatolia following their deeds and reforms in terms of Anatolian infrastructure. The era following the first railway concession in 1856 is significant to understand the Ottoman Empire realizing itself in complex relations with the West, its integration into the global system, and to analyze the origins of contemporary Turkey.</p>
                            </Accordion>
                            <Accordion title="Where do you get your sources from?">
                                <p>We use various subsidiary sources and documents at the Presidency Ottoman Archive in Istanbul, Annuaire Commercial Oriental, David Rumsey Map Collection, Istanbul Municipality Ataturk Library and Biblioth??que Nationale de France. For detailed information, see the <Anchor href="/sources" animate>sources</Anchor> page.</p>
                            </Accordion>
                            {/* <Accordion title="How can I contribute to the project?">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </Accordion> */}
                        </AccordionContainer>
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
