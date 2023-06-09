import React from 'react'

import { SimpleIcon, siTwitter, siFacebook } from 'simple-icons'

interface MapShareProps {
    id: text
}

export function MapShare(props: MapShareProps): FCReturn<MapShareProps> {
    return (
        <div className="ma-map-share-container">
            <div className="ma-map-share">
                <div className="ma-map-share-head">
                    <h3 className="ma-map-share-head-title">
                        <i className="material-icons">reply</i>Share
                    </h3>
                    <i className="ma-map-share-head-close material-icons">close</i>
                </div>
                <div className="ma-map-share-links">
                    <div className="ma-map-share-links-link">
                        <div
                            className="ma-map-share-links-link-icon"
                            style={{
                                backgroundColor: '#1DA1F2'
                            }}
                        >
                            <Icon dark={true} size={32} icon={siTwitter} />
                        </div>
                        <span className="ma-map-share-links-link-text">Twitter</span>
                    </div>
                    <div className="ma-map-share-links-link">
                        <div
                            className="ma-map-share-links-link-icon"
                            style={{
                                backgroundColor: '#3B5998'
                            }}
                        >
                            <Icon dark={true} size={32} icon={siFacebook} />
                        </div>
                        <span className="ma-map-share-links-link-text">Facebook</span>
                    </div>
                </div>
                <div className="ma-map-share-text">
                    <span className="ma-map-share-text-link">{'https://anatolia19.com/map/' + props.id}</span>
                    <button className="ma-map-share-text-button">Copy</button>
                </div>
            </div>
        </div>
    )
}

interface SocialProps {
    icon: SimpleIcon
    dark?: boolean
    size?: number
}

export function Icon(props: SocialProps): FCReturn {
    const color = props.dark ? '#fff' : `#${props.icon.hex}`
    const size = props.size ?? 24

    return (
        <svg
            className="m-socials-social-icon"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 24 24"
        >
            <path d={props.icon.path} />
        </svg>
    )
}
