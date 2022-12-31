import React, { useRef } from 'react'
import mapbox from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import { Meta } from '/components/meta'

// IMAGES

import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

import 'mapbox-gl/dist/mapbox-gl.css'

import { ClientUtil } from '/utils/client.util'
import { Emblem } from '/components/emblem'
import { Input } from '/components/input'

export default function Contact(): FCReturn {
    const mapRef = useRef<mapbox.Map | null>(null)
    const mapContainerRef = React.useRef<HTMLDivElement>(null)

    useDidMount(() => {
        if (!ClientUtil.isClient || mapRef.current) return
        mapbox.accessToken = ClientUtil.MAPBOX_PUBLIC_TOKEN

        // mapRef.current!.addEventListener('contextmenu', (e) => e.preventDefault())

        mapRef.current = new mapbox.Map({
            container: mapContainerRef.current!,
            style: ClientUtil.MAPBOX_STYLE_MAP,
            center: [35, 39],
            zoom: 6,
            attributionControl: true,
            boxZoom: false,
            logoPosition: 'bottom-left'
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
            }),
            'top-right'
        )
        map.addControl(new mapbox.NavigationControl(), 'top-right')
        map.addControl(
            new mapbox.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: false,
                showUserHeading: false
            }),
            'top-right'
        )
    })

    return (
        <>
            <Meta />

            {/* <div className="ma-contact-container"> */}
            <section className="ma-contact-map-container">
                <div ref={mapContainerRef} className="ma-contact-map" />
            </section>
            <section className="ma-contact-content">
                <Emblem h={72} />
                <h1>Submit New Data</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br />
                    <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2>Personal Details *</h2>

                <div className="row">
                    <div className="col-xs">
                        <Input
                            type="text"
                            label="Full Name"
                            placeholder="Your full name"
                        />
                    </div>
                    <div className="col-xs">
                        <Input
                            type="text"
                            label="University — Optional"
                            placeholder="Lorem?"
                            optional={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <Input
                            type="text"
                            label="Email"
                            placeholder="Your mail adress"
                        />
                    </div>
                    <div className="col-xs">
                        <Input
                                type="text"
                                label="Position — Optional"
                                placeholder="Your current position"
                                optional={true}
                            />
                    </div>
                </div>

                <h2>Data Details *</h2>

                <div className="row">
                    <div className="col-xs">
                        <div className="ma-input-container">
                            <label>Data Name</label>
                            <input type="text" className="ma-input" placeholder="aga" />
                        </div>
                    </div>
                    <div className="col-xs">
                        <div className="ma-input-container">
                            <label>Data Type</label>
                            <input type="text" className="ma-input" placeholder="aga" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <div className="ma-input-container">
                            <label>Latitude — Click on the map to autofill</label>
                            <input type="text" className="ma-input" placeholder="aga" />
                        </div>
                    </div>
                    <div className="col-xs">
                        <div className="ma-input-container">
                            <label>Longitude — Click on the map to autofill</label>
                            <input type="text" className="ma-input" placeholder="aga" />
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}

            {/* <Footer /> */}
        </>
    )
}
