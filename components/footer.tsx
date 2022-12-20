import Link from 'next/link'
import React from 'react'
import { Emblem } from '/components/emblem'

interface FooterItemProps {
    href: text
    text: text
}

function FooterItem(props: FooterItemProps): FCReturn<FooterItemProps> {
    return (
        <Link href={props.href} className="ma-footer-section-list-item">
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
                <Emblem h={72} textFill="#FFF" />
                <div className="ma-footer-section-container">
                    <FooterSection title="Socials">
                        <FooterItem href="#" text="Explore with GitHub️" />
                        <FooterItem href="#" text="Follow on Twitter" />
                        <FooterItem href="#" text="Connect via LinkedIn" />
                    </FooterSection>
                    <FooterSection title="Technologies Used">
                        <FooterItem href="#" text="NextJS 14 (React + TS + SASS)" />
                        <FooterItem href="#" text="Mapbox" />
                        <FooterItem href="#" text="OpenStreet Map" />
                    </FooterSection>
                    <FooterSection title="Contact Us">
                        <FooterItem href="#" text="anatolia19-hist@metu.edu.tr" />
                        <FooterItem href="#" text="(+90) 0312 727 2507" />
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
