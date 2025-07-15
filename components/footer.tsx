import Link from 'next/link'
import { Anchor } from './anchor'
import { Emblem } from '/components/emblem'

interface FooterItemProps {
    href: text
    text: text
}

function FooterItem(props: FooterItemProps): FCReturn<FooterItemProps> {
    return (
        <Link href={props.href} target="_blank" className="ma-footer-section-list-item">
            {props.text}
        </Link>
    )
}

interface FooterSectionProps {
    title: text
    children: FCReturn<FooterItemProps>[] | FCReturn<FooterItemProps>
}

function FooterSection(props: FooterSectionProps): FCReturn<FooterSectionProps> {
    return (
        <div className="ma-footer-section">
            <span className="ma-footer-section-title">{props.title}</span>
            <div className="ma-footer-section-list">{props.children}</div>
        </div>
    )
}

export function Footer(): FCReturn {
    return (
        <footer className="ma-footer">
            <div className="ma-mwcontainer">
                <Anchor href="/" animate>
                    <Emblem h={68} textFill="#FFF" />
                </Anchor>
                <div className="ma-footer-section-container">
                    <FooterSection title="Website">
                        <FooterItem href="/" text="Home" />
                        <FooterItem href="/map/index" text="Digital Map" />
                        <FooterItem href="/graphs" text="Graphs" />
                        <FooterItem href="/sources" text="Sources" />
                        <FooterItem href="/submit-data" text="Submit Data" />
                    </FooterSection>
                    <FooterSection title="Socials">
                        <FooterItem href="https://github.com/howion/anatolia-19th/" text="GitHub️" />
                        <FooterItem href="https://twitter.com/19thanatolia" text="Twitter" />
                        <FooterItem
                            href="https://www.linkedin.com/company/anatolia-19th-century-project/"
                            text="LinkedIn"
                        />
                    </FooterSection>
                    <FooterSection title="Tech Stack">
                        <FooterItem href="https://nextjs.org/" text="NextJS 13 (React + TS + SASS)" />
                        <FooterItem href="https://vercel.com/" text="Vercel" />
                        <FooterItem href="https://www.mapbox.com/" text="Mapbox" />
                        <FooterItem href="https://www.openstreetmap.org/" text="OpenStreetMap" />
                        <FooterItem href="https://www.figma.com/" text="Figma" />
                        <FooterItem href="https://reactflow.dev/" text="React Flow" />
                    </FooterSection>
                    <FooterSection title="Contact">
                        <FooterItem href="mailto:yasa.enes@metu.edu.tr" text="yasa.enes@metu.edu.tr" />
                        {/* <FooterItem href="me@howion.com" text="me@howion.com" /> */}
                        {/* <FooterItem href="tel:+903127272507" text="(+90) 312 727 2507" /> */}
                    </FooterSection>
                </div>
            </div>
            <div className="ma-footer-bottom-container">
                <div className="ma-mwcontainer ma-footer-bottom">
                    <span className="ma-footer-bottom-copyright">
                        {/* by <a href="https://github.com/howion" target="_blank">howion</a> */}
                        Licensed under the{' '}
                        <a
                            href="https://github.com/howion/anatolia-19th/blob/main/LICENSE"
                            target="_blank"
                            rel="noopener"
                        >
                            GNU Affero General Public License v3.0
                        </a>
                    </span>
                    {/* <Link href="#" className="ma-footer-bottom-sitemap">
                        sitemap.xml
                    </Link> */}
                </div>
            </div>
        </footer>
    )
}
