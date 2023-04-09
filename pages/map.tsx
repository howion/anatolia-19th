import React, { useCallback, useRef, useState } from 'react'
import { useDidMount } from 'rooks'
import mapbox from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

import { Meta } from '/components/meta'
import { Emblem } from '/components/emblem'
import { TransitorService } from '/services/transitor.service'
import { Anchor } from '/components/anchor'
import { ClientUtil } from '/utils/client.util'

import 'mapbox-gl/dist/mapbox-gl.css'
import { ApiFeaturesReponse } from '/constants/schemas/feature.schema'
import type { ApiFeaturesFeature } from '/constants/schemas/feature.schema'

function getModalWidth(): number {
    if (!window) return 0
    const modalRef = window.document.querySelector('.ma-map-modal') as HTMLDivElement | null
    if (!modalRef) return 0
    return modalRef.offsetWidth ?? 0
}

export default function Home(): FCReturn {
    // const [viewState, setViewState] = React.useState<DECK_ViewState>(InitialViewState)
    const [showControls, setShowControls] = useState(true)
    const mapRef = useRef<mapbox.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const [isModalActive, setIsModalActive] = useState(false)
    const [features, setFeatures] = useState<ApiFeaturesReponse | null>(null)
    const [featureMarkers, setFeatureMarkers] = useState<Record<text, mapbox.Marker>>({})

    const hideModal = useCallback(() => {
        setShowControls(true)
        setIsModalActive(false)
        mapRef.current?.easeTo({
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            duration: 500
        })
    }, [mapRef])

    const showModal = useCallback((id: number) => {
        setShowControls(false)
        setIsModalActive(true)
        mapRef.current?.easeTo({
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: getModalWidth()
            },
            duration: 500
        })
    }, [mapRef])

    useDidMount(async () => {
        // make sure the map is initialized only once
        if (!ClientUtil.isClient || mapRef.current) return

        mapbox.accessToken = ClientUtil.MAPBOX_PUBLIC_TOKEN

        // todo: enable this in production
        // mapRef.current!.addEventListener('contextmenu', (e) => e.preventDefault())

        mapRef.current = new mapbox.Map({
            container: mapContainerRef.current!,
            style: ClientUtil.MAPBOX_STYLE_MAP,
            center: [35, 39],
            zoom: 6,
            attributionControl: true,
            boxZoom: false,
            logoPosition: 'bottom-right'
            // antialias: false
        })

        const map = mapRef.current

        map.on('load', () => {
            TransitorService.hideTransitor()
        })

        if (map.loaded()) TransitorService.hideTransitor()

        map.dragRotate.disable()
        map.touchZoomRotate.disableRotation()

        map.addControl(
            new mapbox.FullscreenControl({
                container: window.document.body
            })
        )
        map.addControl(new mapbox.NavigationControl())
        map.addControl(
            new mapbox.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: false,
                showUserHeading: false
            })
        )

        const features = await ClientUtil.retrieveFeatures()
        const featureMarkers: Record<text, mapbox.Marker> = {}

        if (features?.success) {
            setFeatures(features.data)
            const {points} = features.data

            for (const pid in points) {
                const point = points[pid]
                const marker = new mapbox.Marker().setLngLat([point.lat, point.lon]).addTo(map)
                const pidn = Number.parseInt(pid)
                featureMarkers[pidn] = marker
                marker.getElement().addEventListener('click', () => showModal(pidn))
            }
        }

        setFeatureMarkers(featureMarkers)

        // test marker start
        // const marker = new mapbox.Marker()
        //     .setLngLat([27.6377, 38.8217])
        //     .addTo(map)
        //     .getElement()
        //     .addEventListener('click', () => {
        //         showModal()
        //     })
        // // test marker end
    })

    if (ClientUtil.isClient) {
        const el = document.querySelector<HTMLDivElement>('.mapboxgl-control-container')
        if (el) el.style.display = showControls ? 'block' : 'none'
    }

    // function onPinpointClick(id: number) { }

    // const SW = [34.8, 24.5]
    // const NE = [41.8, 44.8]
    // const Boundaires = [SE, NE]

    return (
        <>
            <Meta />
            <div className="ma-map-emblem">
                <Emblem h={60} textFill="#fff" />
            </div>
            <div className="ma-map-search-container">
                <Anchor href="/" animate>
                    <button className="btn btn-icon">
                        <i className="material-icons">arrow_back</i>
                    </button>
                </Anchor>
                <input
                    className="ma-map-search-input"
                    type="text"
                    placeholder="Search in 19th Century Anatolia Project..."
                />
            </div>
            <div className={'ma-map-modal-container' + (isModalActive ? ' --active' : '')}>
                <div className="ma-map-modal-buttons">
                    <button className="btn btn-icon" onClick={hideModal}>
                        <i className="material-icons">close</i>
                    </button>
                    <button className="btn btn-icon">
                        <i className="material-icons">share</i>
                    </button>
                </div>
                <div className="ma-map-modal">
                    <span className="ma-map-modal-label">DATA SUMMARY</span>
                    <h1 className="ma-map-modal-title">Sevan Bedros Nisanyan</h1>
                    <span className="ma-map-modal-tag">Architect</span>
                    <span className="ma-map-modal-tag">Writer</span>
                    <div className="ma-map-modal-markdown">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="ma-map-modal">
                    <span className="ma-map-modal-label">REFERENCES</span>
                    <ol className="ma-map-modal-references">
                        <li>
                            Rush, E. C., Obolonkin, V., Battin, M., Wouldes, T., & Rowan, J. (2015b). Body composition
                            in offspring of New Zealand women: Ethnic and gender differences at age 1–3 years in
                            2005–2009. Annals Of Human Biology, 42(5), 492–497.
                        </li>
                        <li>Commercial 1978</li>
                    </ol>
                </div>
                <div className="ma-map-modal">
                    <span className="ma-map-modal-label">ACTIVITIES & NOTES</span>
                </div>
            </div>
            <div ref={mapContainerRef} className="ma-map-container" />
        </>
    )
    // <div style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100vh'
    // }}>
    //     {/* <h1>Hi mom!</h1> */}

    // </div>
}
