import Link from 'next/link'
import React from 'react'
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
        <footer className="ma-footer" data-scroll-section>
            <div className="ma-mwcontainer">
                <Emblem h={72} textFill="#FFF" />
                <div className="ma-footer-section-container">
                    <FooterSection title="Socials">
                        <FooterItem href="https://github.com/howion/anatolia-19th/" text="Explore with GitHub️" />
                        <FooterItem href="https://twitter.com/19thanatolia" text="Follow on Twitter" />
                        <FooterItem
                            href="https://www.linkedin.com/company/anatolia-19th-century-project/"
                            text="Connect via LinkedIn"
                        />
                    </FooterSection>
                    <FooterSection title="Technologies Used">
                        <FooterItem href="https://nextjs.org/" text="NextJS 13 (React + TS + SASS)" />
                        <FooterItem href="https://www.mapbox.com/" text="Mapbox" />
                        <FooterItem href="https://www.openstreetmap.org/" text="OpenStreetMap" />
                        <FooterItem href="https://www.figma.com/" text="Figma" />
                        <FooterItem href="https://reactflow.dev/" text="React Flow" />
                    </FooterSection>
                    <FooterSection title="Contact Us">
                        <FooterItem href="mailto:anatolia19-hist@metu.edu.tr" text="anatolia19-hist@metu.edu.tr" />
                        <FooterItem href="tel:+903127272507" text="(+90) 312 727 2507" />
                    </FooterSection>
                </div>
            </div>
            <div className="ma-footer-bottom-container">
                <div className="ma-mwcontainer ma-footer-bottom">
                    <span className="ma-footer-bottom-copyright">Anatolia: 19th Century &copy; 2022</span>
                    <Link href="#" className="ma-footer-bottom-sitemap">
                        sitemap.xml
                    </Link>
                </div>
            </div>
        </footer>
    )
}
