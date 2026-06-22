import { useDidMount } from 'rooks'

import { Meta } from '/components/meta'
import { TransitorService } from '/services/transitor.service'
import { Anchor } from '/components/anchor'

export default function Graphs(): FCReturn {
    useDidMount(() => {
        TransitorService.hideTransitor()
    })

    return (
        <>
            <Meta title="Bursa Ansiklopedik Haritası" />
            <div className="ma-graphs-container">
                <div className="ma-graphs-back">
                    <Anchor href="/" animate>
                        <button className="btn btn-icon" type="button">
                            <i className="material-icons">arrow_back</i>
                        </button>
                    </Anchor>
                </div>
                <iframe
                    title="Harita"
                    className="ma-graphs-embed"
                    src="https://storymaps.arcgis.com/stories/180dc14d2f6f49bfbc37a9014bd984ac"
                    width="100%"
                    height="100%"
                    // sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox"
                    frameBorder="0"
                    allowFullScreen
                    allow="geolocation"
                />
            </div>
        </>
    )
}
