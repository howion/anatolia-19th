import type { ApiFeature } from '/constants/schemas/feature.schema'
import { type SimpleIcon, siX, siFacebook, siReddit, siMaildotru, siPinterest } from 'simple-icons'

interface MapShareProps {
    feature: ApiFeature | null
    open: boolean
    onClose: () => void
}

export function MapShare(props: MapShareProps): FCReturn<MapShareProps> {
    const link = `https://anatolia19.metu.edu.tr/map/${props.feature?.sid}`
    const text = ''
    const linkURLSafe = encodeURIComponent(link)
    const textURLSafe = encodeURIComponent(text)

    function handleCopy() {
        // toast('Copied to clipboard!', {
        //     position: 'bottom-center',
        //     theme: 'dark',
        //     hideProgressBar: true
        // })
        navigator.clipboard.writeText(link)
    }

    return (
        <div className={`ma-map-share-container${props.open ? ' is-open' : ''}`}>
            <div className="ma-map-share">
                <div className="ma-map-share-head">
                    <h3 className="ma-map-share-head-title">
                        <i className="material-icons">reply</i>Share
                    </h3>
                    <i className="ma-map-share-head-close material-icons" onClick={props.onClose}>
                        close
                    </i>
                </div>
                <div className="ma-map-share-links">
                    <a
                        href={`https://x.com/intent/post?url=${linkURLSafe}&text=${textURLSafe}`}
                        target="_blank"
                        className="ma-map-share-links-link"
                    >
                        <div
                            className="ma-map-share-links-link-icon"
                            style={{
                                backgroundColor: `#${siX.hex}`
                            }}
                        >
                            <Icon dark={true} size={32} icon={siX} />
                        </div>
                        <span className="ma-map-share-links-link-text">X</span>
                    </a>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${linkURLSafe}`}
                        target="_blank"
                        className="ma-map-share-links-link"
                    >
                        <div
                            className="ma-map-share-links-link-icon"
                            style={{
                                backgroundColor: `#${siFacebook.hex}`
                            }}
                        >
                            <Icon dark={true} size={32} icon={siFacebook} />
                        </div>
                        <span className="ma-map-share-links-link-text">Facebook</span>
                    </a>
                    <a
                        href={`http://www.reddit.com/submit?url=${linkURLSafe}&title=${textURLSafe}`}
                        target="_blank"
                        className="ma-map-share-links-link"
                    >
                        <div
                            className="ma-map-share-links-link-icon"
                            style={{
                                backgroundColor: `#${siReddit.hex}`
                            }}
                        >
                            <Icon dark={true} size={32} icon={siReddit} />
                        </div>
                        <span className="ma-map-share-links-link-text">Reddit</span>
                    </a>
                    <a
                        href={`http://pinterest.com/pin/create/button/?url=${linkURLSafe}&media=&description=${textURLSafe}`}
                        target="_blank"
                        className="ma-map-share-links-link"
                    >
                        <div
                            className="ma-map-share-links-link-icon"
                            style={{
                                backgroundColor: `#${siPinterest.hex}`
                            }}
                        >
                            <Icon dark={true} size={32} icon={siPinterest} />
                        </div>
                        <span className="ma-map-share-links-link-text">Pinterest</span>
                    </a>
                    <a
                        href={`mailto:?body=${textURLSafe} ${linkURLSafe}}`}
                        target="_blank"
                        className="ma-map-share-links-link"
                    >
                        <div
                            className="ma-map-share-links-link-icon"
                            style={{
                                backgroundColor: `#${siMaildotru.hex}`
                            }}
                        >
                            <Icon dark={true} size={32} icon={siMaildotru} />
                        </div>
                        <span className="ma-map-share-links-link-text">Mail</span>
                    </a>
                </div>
                <div className="ma-map-share-text">
                    <span className="ma-map-share-text-link">{link}</span>
                    <button className="ma-map-share-text-button" onClick={handleCopy} type="button">
                        Copy
                    </button>
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
