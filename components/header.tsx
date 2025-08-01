import Image, { type StaticImageData } from 'next/image'
import { Navbar } from './navbar'

interface HeaderProps {
    headerImage: StaticImageData
    text: text
    subtitle: text
}

export function Header(props: HeaderProps): FCReturn<HeaderProps> {
    return (
        <header className="ma-header">
            <div className="ma-mwcontainer">
                <Navbar />
                <h1 className="ma-header-title">The Anatolia: 19th Century Project {props.subtitle}</h1>
                <p className="ma-header-p">{props.text}</p>
            </div>
            <div className="ma-header-back">
                <Image className="ma-header-img" src={props.headerImage} alt="" fetchPriority="high" priority={true} />
                {/* <img src="/img/home-headerback.svg" alt="" /> */}
            </div>
        </header>
    )
}
