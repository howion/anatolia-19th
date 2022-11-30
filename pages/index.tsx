import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { Header } from '/components/header'
import { Meta } from '/components/meta'

import { Intro } from '/components/intro'

import digitalMapJPG from '/public/img/projects/digital_map.jpg'
import exploreAnatolia from '/public/img/projects/explore_anatolia.jpg'
import graphsJPG from '/public/img/projects/graphs.jpg'
import sourcesJPG from '/public/img/projects/sources.jpg'
import { Emblem } from '/components/emblem'
import { useState } from 'react'
import { Splash } from '/components/splash'

interface ProjectProps {
    src: text
    txt: text
}

function Project(props: ProjectProps): FCReturn {
    return (
        <div className="ma-home-projects-project-container">
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

export default function Home() {
    const [h, setH] = useState(false)
    return (
        <>
            <Meta />
            <Intro />
            <div onClick={() => setH(!h)}>
                <Splash hidden={h} />
            </div>
            <div className="ma-mwcontainer">
                {/* SEARCH */}
                <div className="ma-home-search-container">
                    <input
                        className="ma-home-search-input"
                        placeholder="Search in the 19th Century Anatolia Project Database..."
                        type="text"
                    />
                    <i className="ma-home-search-i material-icons">search</i>
                    <div className="focuser"></div>
                </div>

                {/* PROJECTS */}
                <div className="ma-home-projects-container">
                    <div className="ma-home-projects-label">OUR PROJECTS</div>
                    <Project src="/img/projects/sources.jpg" txt="Sources" />
                    <Project src="/img/projects/digital_map.jpg" txt="Digital Map" />
                    <Project src="/img/projects/graphs.jpg" txt="Graphs" />
                    <Project src="/img/projects/explore_anatolia.jpg" txt="Explore Anatolia" />
                </div>

                {/* SPONSORS */}
                <div className="ma-home-sponsors-container">
                    <h2 className='ma-section-title s1 c1'><span>01</span>Project Sponsors</h2>
                    <div className="ma-home-sponsors-list">
                        <div className="ma-home-sponsors-sponsor"></div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
