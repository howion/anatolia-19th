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

import RefOdtu from '/public/img/ref/odtu.png'
import RefSalt from '/public/img/ref/salt.svg'
import RefAnamed from '/public/img/ref/anamed.png'

import homeIntroback from '/public/img/home-introback.jpg'
import sarkTicaret from '/public/img/sark_ticaret.png'

import peopleSelcuk from '/public/img/people/selcuk.png'
// import peopleEbru from '/public/img/people/ebru.png'
import peopleAgah from '/public/img/people/agah.png'
import peopleKadri from '/public/img/people/kadri.png'
import peopleRasit from '/public/img/people/rasit.png'
import peopleFurkan from '/public/img/people/furkan.jpeg'
import peopleDoga from '/public/img/people/doga.png'
import peopleMert from '/public/img/people/mert.png'

import { siGithub, siTwitter, siLinkedin, siBehance } from 'simple-icons'


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

interface PersonLink {
    link: text
    icon: any
}

interface PersonProps {
    src: any
    name: text
    role: text
    start: text
    end: text
    links?: PersonLink[]
}

function Person(props: PersonProps): FCReturn<PersonProps> {
    return (
        <div className="ma-home-people-card">
            <Image className="ma-home-people-card-pic" src={props.src} alt="" />
            <div className="ma-home-people-card-content">
                <span>
                    {props.start} &nbsp;&mdash;&nbsp; {props.end}
                </span>
                <h4>{props.name}</h4>
                <b>{props.role}</b>
                <div className="ma-home-people-card-content-links">
                    {props.links
                        ? props.links.map((v, i) => (
                              <a className="ma-home-people-card-content-link" href={v.link} key={i}>
                                  {typeof v.icon === 'string' ? (
                                      <i className="material-icons">{v.icon}</i>
                                  ) : (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          fill={'#' + v.icon.hex}
                                          viewBox="0 0 24 24"
                                      >
                                          <path d={v.icon.path} />
                                      </svg>
                                  )}
                              </a>
                          ))
                        : undefined}
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className="ma-home-people-card">
    //         <Image className="ma-home-people-card-img" src={props.src} alt="" />
    //         <span className="ma-home-people-card-name">{props.name}</span>
    //         <span className="ma-home-people-card-role">{props.role}</span>
    //     </div>
    // )
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
                text="Welcome to the 19th Century Anatolia Project’s website. An undergraduate digital humanities project aiming to compile as well as digitize intricate data on the region in this century, Anatolia19 here presents its latest work."
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
                    <Project src="/img/projects/digital_map.jpg" txt="Digital Map" href="/map" />
                    <Project src="/img/projects/explore_anatolia.jpg" txt="Explore Anatolia" disabled />
                    <Project src="/img/projects/graphs.jpg" txt="Graphs" href="/graphs" />
                    <Project src="/img/projects/sources.jpg" txt="Sources" href="/sources" />
                </section>

                {/* SPONSORS */}
                <section className="ma-home-sponsors-container">
                    <Image className="ma-home-sponsors-back" src={sarkTicaret} alt="" />
                    <h2 className="ma-section-title c1 text-center">Project Sponsors</h2>
                    <p className="ma-section-text text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis obcaecati? Quia
                        architecto laborum quam, sequi inventore eaque illum error obcaecati voluptatem. Praesentium
                        eius id alias eos est voluptas soluta?
                    </p>
                    <div className="ma-home-sponsors-list">
                        <Image className="ma-home-sponsors-sponsor" height={64} src={RefOdtu} alt="" />
                        <Image className="ma-home-sponsors-sponsor" height={64} src={RefSalt} alt="" />
                        <Image className="ma-home-sponsors-sponsor" height={64} src={RefAnamed} alt="" />
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
                    <div className="ma-home-people-side-text">
                        <h2 className="ma-section-title c2">
                            <b>Here We Are</b>
                            <br />
                            Meet With Our Team
                        </h2>
                        <p className="ma-section-text px-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur itaque
                            eaque quisquam quasi asperiores provident laboriosam, esse ratione recusandae veritatis quia
                            earum cumque voluptas sapiente quidem vitae cum voluptate?
                        </p>
                    </div>
                    <div className="ma-home-people-side-people">
                        <Person src={peopleSelcuk} name="Selcuk Dursun" role="Supervisor" start="2021" end="Present" />
                        <Person src={peopleAgah} name="Agah Enes Yasa" role="Coordinator" start="2021" end="Present" />
                        <Person
                            src={peopleMert}
                            name="Omer Mert Coskun"
                            role="Developer"
                            start="2022"
                            end="Present"
                            links={[
                                { link: 'https://howion.com', icon: 'public' },
                                { link: 'https://github.com/howion', icon: siGithub},
                                { link: 'https://www.linkedin.com/in/omer-mert-coskun/', icon: siLinkedin },
                                { link: 'https://www.behance.net/howion', icon: siBehance },
                                { link: 'https://twitter.com/howionwastaken', icon: siTwitter }
                            ]}
                        />
                        <Person
                            src={peopleFurkan}
                            name="Furkan Arslan"
                            role="Ottoman Turkish Translator"
                            start="2023"
                            end="Present"
                        />
                        <Person
                            src={peopleKadri}
                            name="Mustafa Kadri Yekeler"
                            role="Ottoman Turkish Translator"
                            start="2021"
                            end="Present"
                        />
                    </div>
                </div>
                <div className="ma-home-people-wrapper is-flipped">
                    <div className="ma-home-people-side-people">
                        <Person src={peopleSelcuk} name="Selcuk Dursun" role="Supervisor" start="2021" end="Present" />
                        <Person
                            src={peopleAgah}
                            name="Agah Enes Yasa"
                            role="Founder & Coordinator"
                            start="2021"
                            end="Present"
                        />
                        <Person src={peopleMert} name="Omer Mert Coskun" role="Developer" start="2022" end="Present" />
                    </div>
                    <div className="ma-home-people-side-text">
                        <h2 className="ma-section-title c2">
                            <b>Here We Are</b>
                            <br />
                            Meet With Our Team
                        </h2>
                        <p className="ma-section-text px-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur itaque
                            eaque quisquam quasi asperiores provident laboriosam, esse ratione recusandae veritatis quia
                            earum cumque voluptas sapiente quidem vitae cum voluptate?
                        </p>
                    </div>
                </div>
            </div>
            <div className="ma-mwcontainer">
                <div className="ma-home-faq-wrapper">
                    <h2 className="ma-section-title c3 text-center">Frequently Asked Questions</h2>
                    <p className="ma-section-text text-center m-b-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dignissimos perspiciatis alias
                        minima ullam voluptate facilis officiis sit quas quis non aliquid animi, veritatis distinctio
                        recusandae. Quas nesciunt incidunt earum.
                    </p>

                    <div className="ma-mwcontainer ma-mwcontainer-md px-0">
                        <AccordionContainer>
                            <Accordion title="How can I contribute to this project?">
                                <p>
                                    <i>Anatolia: 19th Century</i> project invites its researchers for their
                                    contributions on various subjects and is open to academic/non-academic
                                    contributions. For more detailed information, see the Submit Data section.
                                </p>
                            </Accordion>
                            <Accordion title="Why are you doing this project?">
                                <p>
                                    The 19th century is an era of transformation all over the world, the ground upon
                                    which the world we now live in was constructed. In the particular case of the
                                    Ottoman Empire, the reign of Sultan Abdulaziz and Abdulhamid II signified the start
                                    of the prosperity of Anatolia following their deeds and reforms in terms of
                                    Anatolian infrastructure. The era following the first railway concession in 1856 is
                                    significant to understand the Ottoman Empire realizing itself in complex relations
                                    with the West, its integration into the global system, and to analyze the origins of
                                    contemporary Turkey.
                                </p>
                            </Accordion>
                            <Accordion title="Where do you get your sources from?">
                                <p>
                                    We use various subsidiary sources and documents at the Presidency Ottoman Archive in
                                    Istanbul, Annuaire Commercial Oriental, David Rumsey Map Collection, Istanbul
                                    Municipality Ataturk Library and Bibliothèque Nationale de France. For detailed
                                    information, see the{' '}
                                    <Anchor href="/sources" animate>
                                        sources
                                    </Anchor>{' '}
                                    page.
                                </p>
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
            import siLinkedIn from 'simple-icons/icons/linkedin.svg'
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </>
    )
}
