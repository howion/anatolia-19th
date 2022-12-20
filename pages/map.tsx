import React, { useState } from 'react'
import type { MapRef, ViewState } from 'react-map-gl'
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl'
import { Meta } from '/components/meta'
// import { useDidMount } from 'rooks'

import 'mapbox-gl/dist/mapbox-gl.css'
import { Emblem } from '/components/emblem'
import Link from 'next/link'
// import '@watergis/mapbox-gl-export/css/styles.css'

// @ts-ignore err
// import { RulerControl } from 'mapbox-gl-controls'

// const Dynamic = dynamic(() => import('mapbox-gl-controls').then(s => s.RulerControl), {
//     ssr: false
// })

// @ts-ignore
// import MapboxInspect from 'mapbox-gl-inspect'

// const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoiaG93aW9uIiwiYSI6ImNsYjh6b2gycDBia2ozd21nYjh3Y2JmcWUifQ.DE19OL-ugnq3dq66xKjoEw'
const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1IjoiaG93aW9uIiwiYSI6ImNsYjh6b2gycDBia2ozd21nYjh3Y2JmcWUifQ.DE19OL-ugnq3dq66xKjoEw'

/**
 * TODO:
 * TURKEY GEOFENCE
 */

export default function Home(): FCReturn {
    const [viewState, setViewState] = React.useState<Partial<ViewState>>({
        longitude: 35,
        latitude: 40,
        zoom: 5,
        bearing: 0
    })
    // const [showControls, setShowControls] = useState(true)
    const mapRef = React.useRef<MapRef>(null)
    const [isModalActive, setIsModalActive] = React.useState(true)

    const onMapLoad = React.useCallback(async () => {
        // const map = mapRef.current!
        // const mapNative = map.getMap()
        // const { CompassControl, ZoomControl } = await import('mapbox-gl-controls')
        // // const { MapboxExportControl, Size, PageOrientation, Format, DPI } = await import("@watergis/mapbox-gl-export")
        // map.addControl(new CompassControl(), 'top-right')
        // map.addControl(new ZoomControl(), 'top-right')
        // map.addControl(new MapboxExportControl({
        //     accessToken: MAPBOX_PUBLIC_TOKEN,
        //     PageSize: Size.A3,
        //     PageOrientation: PageOrientation.Portrait,
        //     Format: Format.PNG,
        //     DPI: DPI[96],
        //     Crosshair: true,
        //     PrintableArea: true
        // }), 'top-right')
        // mapNative.addControl()
        // map.addControl((new MapboxInspect({
        //     popup: new mapboxgl.Popup({
        //         closeButton: false,
        //         closeOnClick: false
        //     })
        // }));
        // map.on('move', () => {})
        // console.log(map.getMap())
    }, [])

    function hideModal() {
        // setShowControls(true)
        setIsModalActive(false)
    }

    function showModal() {
        // setShowControls(false)
        setIsModalActive(true)
    }

    // eslint-disable-next-line
    function onPinpointClick(id: number) {}

    // useDidMount(() => {
    //     console.log(map)
    // })

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
                <Link href="/">
                    <i className="ma-map-search-back material-icons">arrow_back</i>
                </Link>
                <input
                    className="ma-map-search-input"
                    type="text"
                    placeholder="Search in 19th Century Anatolia Project..."
                />
            </div>
            <div className={'ma-map-modal' + (isModalActive ? ' active' : '')}>
                <div className="ma-map-modal-slide" onClick={() => (isModalActive ? hideModal() : showModal())}>
                    <i className="material-icons">chevron_right</i>
                </div>
                <div className="ma-map-modal-header">
                    <h1 className="ma-map-modal-header-title">Altın-ı Sükûn</h1>
                    <div className="ma-map-modal-header-occupations">
                        {/* <div className="ma-map-modal-content-labels-label">e</div> */}
                        Jewelry, Banking
                    </div>
                </div>
                <div className="ma-map-modal-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="ma-map-modal-resources">
                    <h2 className="ma-map-modal-resources-title">Resources</h2>
                    <ol>
                        <li>
                            Rush, E. C., Obolonkin, V., Battin, M., Wouldes, T., & Rowan, J. (2015b). Body composition
                            in offspring of New Zealand women: Ethnic and gender differences at age 1–3 years in
                            2005–2009. Annals Of Human Biology, 42(5), 492–497.
                        </li>
                        <li>Commercial 1978</li>
                    </ol>
                </div>
            </div>
            <div className="ma-map-container">
                <Map
                    ref={mapRef}
                    initialViewState={viewState}
                    // viewState={viewState}
                    onMove={(e) => setViewState(e.viewState)}
                    // mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapStyle="mapbox://styles/howion/clbrzux99000p14pmookcim4w"
                    mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
                    // maxBounds={Boundaries}
                    onLoad={onMapLoad}
                    bearing={0}
                    boxZoom={false}
                >
                    {isModalActive ? undefined : (
                        <>
                            <FullscreenControl />
                            <GeolocateControl />
                            <NavigationControl />
                        </>
                    )}
                    {/* <ScaleControl /> */}

                    <Marker longitude={32} latitude={38.8} color="red" onClick={showModal} />
                </Map>
            </div>
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
