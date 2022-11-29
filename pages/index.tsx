import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { Header } from '/components/header'
import { Meta } from '/components/meta'

import { Intro } from '/components/intro'

import digitalMapJPG from '/public/img/projects/digital_map.jpg'
import exploreAnatolia from '/public/img/projects/explore_anatolia.jpg'
import graphsJPG from '/public/img/projects/graphs.jpg'
import sourcesJPG from '/public/img/projects/sources.jpg'

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
            <span className="ma-home-projects-project-span">{props.txt}</span>
            {/* <Image className="ma-home-projects-project-img" src={props.src} alt={props.txt} /> */}
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Meta />
            <Intro />
            <div className="ma-mwcontainer">
                {/* SEARCH */}
                <div className="ma-home-search-container">
                    <input
                        className="ma-home-search-input"
                        placeholder="Search in 19th Century Anatolia Project..."
                        type="text"
                    />
                    <i className="ma-home-search-i material-icons">search</i>
                </div>

                {/* PROJECTS */}
                <div className="ma-home-projects-container">
                    <div className="ma-home-projects-label">OUR PROJECTS</div>
                    <Project src="/img/projects/sources.jpg" txt="Sources" />
                    <Project src="/img/projects/digital_map.jpg" txt="Digital Map" />
                    <Project src="/img/projects/graphs.jpg" txt="Graphs" />
                    <Project src="/img/projects/explore_anatolia.jpg" txt="Explore Anatolia" />
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
