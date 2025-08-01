import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useDebounce, useDidMount } from 'rooks'
import { format } from 'date-fns'

import { Meta } from '/components/meta'
import { Header } from '/components/header'

// IMAGES
import { Footer } from '/components/footer'
import { Accordion, AccordionContainer } from '/components/accordion'
import { Anchor } from '/components/anchor'
import { TransitorService } from '/services/transitor.service'

import RefOdtu from '/public/img/ref/odtu.webp'
import RefSalt from '/public/img/ref/salt.webp'
import RefHafizaMerkezi from '/public/img/ref/hafizamerkezi.webp'
import RefVekam from '/public/img/ref/vekam.svg'
// import RefAnamed from '/public/img/ref/anamed.webp'

import homeIntroback from '/public/img/home-introback.webp'
import sarkTicaret from '/public/img/sark_ticaret.webp'

import peopleSelcuk from '/public/img/people/selcuk.webp'
import peopleAgah from '/public/img/people/agah2.webp'
import peopleMert from '/public/img/people/mert.webp'
import peopleCem from '/public/img/people/cem.webp'
import peopleMuzaffer from '/public/img/people/muzaffer2.webp'
import peopleErtas from '/public/img/people/ertas.webp'

import { siGithub, siX } from 'simple-icons'
import { LoadingService } from '/services/loading.service'
import { retrieveStats } from '/models/misc.modal'
import { searchFeatures } from '/utils/client.util'

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
            className={`ma-home-projects-project-container${props.disabled ? ' disabled' : ''}`}
            animate
            prefetch={false}
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
                <span className="ma-home-people-card-content-years">
                    {props.start} &nbsp;&mdash;&nbsp; {props.end}
                </span>
                <h4 className="ma-home-people-card-content-name">{props.name}</h4>
                <b className="ma-home-people-card-content-role">{props.role}</b>
                {props.links ? (
                    <div className="ma-home-people-card-content-links">
                        {props.links.map((v, i) => (
                            <a
                                className="ma-home-people-card-content-link"
                                href={v.link}
                                target="_blank"
                                key={`${i}${v.link}`}
                            >
                                {typeof v.icon === 'string' ? (
                                    <i className="material-icons">{v.icon}</i>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill={`#${v.icon.hex}`}
                                        viewBox="0 0 24 24"
                                        role="img"
                                    >
                                        <path d={v.icon.path} />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>
                ) : undefined}
                {/* <a href="#" className="ma-home-people-card-content-email">
                me@howion.com
            </a> */}
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

export interface HomeProps {
    stats: any
}

export async function getServerSideProps(): Promise<{ props: HomeProps }> {
    const stats = await retrieveStats()

    return {
        props: {
            stats
        }
    }
}

export default function Home(props: HomeProps): FCReturn {
    useDidMount(() => {
        TransitorService.hideTransitor()
    })

    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<any[]>([])
    const setValueDebounced = useDebounce(setSearchQuery, 500)

    useEffect(() => {
        if (!searchQuery) return setSearchResults([])
        LoadingService.set(true)
        searchFeatures(searchQuery).then((res) => {
            if (!res || !res.success) return setSearchResults([])
            setSearchResults(res.data)
            LoadingService.set(false)
        })
    }, [searchQuery])

    return (
        <>
            <Meta />
            <Header
                headerImage={homeIntroback}
                subtitle="Web Portal"
                text="Welcome to the 19th Century Anatolia Project’s website. An undergraduate digital humanities project aiming to compile as well as digitize intricate data on the region in this century. Anatolia 19, here, presents its latest work."
            />
            <div className="ma-mwcontainer">
                {/* SEARCH */}
                <section className="ma-home-search-container">
                    <input
                        className="ma-home-search-input"
                        placeholder="Search in the 19th Century Anatolia Project Database..."
                        type="text"
                        onChange={(e) => setValueDebounced(e.target.value)}
                    />
                    <i className="material-icons ma-home-search-i">search</i>
                    <div className="focuser"></div>

                    {searchResults && searchResults.length > 0 && (
                        <div className="ma-home-search-results">
                            <div className="ma-home-search-results-label">FEATURES</div>
                            {searchResults.map((result) => (
                                <Anchor
                                    key={result.sid}
                                    className="ma-home-search-results-result"
                                    // onClick={() => showModal(result.id)}
                                    href={`/map/${result.sid}`}
                                    prefetch={false}
                                    animate={true}
                                >
                                    {`${result.name}, ${result.city}, ${result.occupations
                                        .map((s: any) => s.name)
                                        .join(', ')}`}
                                </Anchor>
                            ))}
                        </div>
                    )}
                </section>

                {/* PROJECTS */}
                <section className="ma-home-projects-container">
                    <div className="ma-home-projects-label">OUR PROJECTS</div>
                    <Project src="/img/projects/digital_map2.webp" txt="Socio-Economic Map" href="/map/index" />
                    <Project src="/img/projects/valuation2.webp" txt="Historical Commodity Price Map" disabled />
                    <Project src="/img/projects/growth2.webp" txt="Growth Rate Map" href="/" disabled />
                    <Project src="/img/sources/newspaper1.webp" txt="Sources" href="/sources" />
                </section>

                {/* REFERENCES */}
                <section className="ma-home-sponsors-container">
                    <Image className="ma-home-sponsors-back" src={sarkTicaret} alt="" />
                    <h2 className="ma-section-title c1 text-center">Project References</h2>
                    <p className="ma-section-text text-center">
                        Supporters of our project in many ways including but not limited to transporation, accomodation
                        and access to the their archieves.
                    </p>
                    <div className="ma-home-sponsors-list">
                        <Image className="ma-home-sponsors-sponsor" height={64} src={RefOdtu} alt="" />
                        <Image className="ma-home-sponsors-sponsor" height={64} src={RefSalt} alt="" />
                        <Image className="ma-home-sponsors-sponsor" height={64} src={RefHafizaMerkezi} alt="" />
                        <Image className="ma-home-sponsors-sponsor" height={64} src={RefVekam} alt="" />
                    </div>
                </section>
            </div>
            {/* STATS */}
            {props.stats?.entries > 0 && (
                <section className="ma-home-stats-container">
                    {/* <div className="ma-home-stats-back" /> */}
                    <div className="ma-mwcontainer">
                        <div className="ma-home-stats-wrapper">
                            <div className="ma-home-stats-stat">
                                <span className="ma-home-stats-stat-label">Entries</span>
                                <span className="ma-home-stats-stat-value">{props.stats.entries}</span>
                            </div>
                            <div className="ma-home-stats-stat">
                                <span className="ma-home-stats-stat-label">Last Entry</span>
                                <span className="ma-home-stats-stat-value">{props.stats.lastEntry.name}</span>
                                <span className="ma-home-stats-stat-subvalue">
                                    {props.stats.lastEntry.occupations.map((s: any) => s.name).join(', ')}
                                </span>
                            </div>
                            <div className="ma-home-stats-stat">
                                <span className="ma-home-stats-stat-label">Contributors</span>
                                <span className="ma-home-stats-stat-value">{props.stats.contributors}</span>
                            </div>
                            <div className="ma-home-stats-stat">
                                <span className="ma-home-stats-stat-label">Last Update</span>
                                <span className="ma-home-stats-stat-value">
                                    {format(props.stats.lastUpdate, 'dd MMMM yyyy')}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <div className="ma-mwcontainer">
                <div className="ma-home-people-wrapper">
                    <div className="ma-home-people-side-text">
                        <h2 className="ma-section-title c2">
                            <b>Here We Are</b>
                            <br />
                            Meet With Our Team
                        </h2>
                        <p className="ma-section-text px-0">
                            Hereby you can see everyone involved with our project at the moment.
                        </p>
                    </div>
                    <div className="ma-home-people-side-people">
                        <Person
                            src={peopleSelcuk}
                            name="Selcuk Dursun"
                            role="Supervisor"
                            start="2021"
                            end="Present"
                            links={[
                                {
                                    link: 'https://x.com/tariHist',
                                    icon: siX
                                }
                            ]}
                        />
                        <Person
                            src={peopleErtas}
                            name="Deren Ertas"
                            role="Associate Advisor"
                            start="2025"
                            end="Present"
                            links={[
                                {
                                    link: 'https://history.fas.harvard.edu/people/deren-ertas',
                                    icon: 'public'
                                },
                                {
                                    link: 'mailto:derenertas@g.harvard.edu',
                                    icon: 'mail'
                                }
                            ]}
                        />
                        <Person
                            src={peopleAgah}
                            name="Agah Enes Yasa"
                            role="Cofounder & Coordinator"
                            start="2021"
                            end="Present"
                            links={[
                                {
                                    link: 'https://twitter.com/agahens',
                                    icon: siX
                                }
                            ]}
                        />
                        <Person
                            src={peopleMert}
                            name="Omer Mert Coskun"
                            role="Cofounder & Lead Developer"
                            start="2021"
                            end="Present"
                            links={[
                                { link: 'https://howion.com', icon: 'public' },
                                { link: 'mailto:mert.coskun@metu.edu.tr', icon: 'mail' },
                                {
                                    link: 'https://github.com/howion',
                                    icon: siGithub
                                }
                            ]}
                        />
                        <Person
                            src={peopleCem}
                            name="Cem Curl"
                            role="Mathematical Modeler"
                            start="2025"
                            end="Present"
                            links={[
                                {
                                    link: 'https://www.linkedin.com/in/cem-curl-1a642a26b/',
                                    icon: 'link'
                                }
                            ]}
                        />
                        <Person
                            src={peopleMuzaffer}
                            name="Muzaffer Cakir"
                            role="Researcher"
                            start="2025"
                            end="Present"
                            links={[
                                {
                                    link: 'https://www.linkedin.com/in/muzaffer-%C3%A7ak%C4%B1r-7897a026b/',
                                    icon: 'link'
                                }
                            ]}
                        />
                    </div>
                </div>
                {/* <div className="ma-home-people-wrapper is-flipped">
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
                            <b>Here They Were</b>
                            <br />
                            Previous Members
                        </h2>
                        <p className="ma-section-text px-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur itaque
                            eaque quisquam quasi asperiores provident laboriosam, esse ratione recusandae veritatis quia
                            earum cumque voluptas sapiente quidem vitae cum voluptate?
                        </p>
                    </div>
                </div> */}
            </div>
            <div className="ma-mwcontainer">
                <div className="ma-home-faq-wrapper">
                    <h2 className="ma-section-title c3 text-center">Frequently Asked Questions</h2>
                    <p className="ma-section-text text-center m-b-5">
                        Here are a few of the questions we get the most. If you don't see what is on your mind, reach
                        out to us anytime via email.
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
                            <Accordion title="What is the purpose?">
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
                                    <Anchor href="/sources" animate prefetch={false}>
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
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </>
    )
}
