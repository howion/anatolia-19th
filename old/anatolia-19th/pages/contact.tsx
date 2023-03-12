import React, { useRef } from 'react'
import mapbox from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import { Meta } from '/components/meta'

import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

import { ClientUtil } from '/utils/client.util'
import { Emblem } from '/components/emblem'
import { Input } from '/components/input'
import { Anchor } from '/components/anchor'

import 'mapbox-gl/dist/mapbox-gl.css'

export default function Contact(): FCReturn {
    const mapRef = useRef<mapbox.Map | null>(null)
    const mapContainerRef = React.useRef<HTMLDivElement>(null)
    const markerRef = React.useRef<mapbox.Marker | null>(null)

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

        map.on('click', (e) => {
            const lngLat = e.lngLat

            if (markerRef.current) {
                // markerRef.current.setLngLat(lngLat)
                // markerRef.current.addTo(map)
                markerRef.current.remove()
                markerRef.current = null
            }

            markerRef.current = new mapbox.Marker({ color: '#ff0000' }).setLngLat(lngLat).addTo(map)

            console.log(lngLat)

            //     m.setLngLat(lngLat).addTo(map)
            //     setMarker(m)

            // if (markerRef.current) {
            //     console.log('removed it!');
            //     markerRef.current = ""
            //     marker.remove()
            //     setMarker(null)
            // } else {
            //
            // }
        })

        if (map.loaded()) TransitorService.hideTransitor()

        map.dragRotate.disable()
        map.touchZoomRotate.disableRotation()

        map.addControl(new mapbox.FullscreenControl(), 'top-right')
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
                <div className="ma-map-search-container ma-map-search-container--contact">
                    <Anchor href="/" animate>
                        <button className="btn btn-icon">
                            <i className="material-icons">arrow_back</i>
                        </button>
                    </Anchor>
                </div>
                <div ref={mapContainerRef} className="ma-contact-map" />
            </section>

            <section className="ma-contact-content">
                <Emblem h={64} />
                <h1>Submit New Data</h1>
                <br />
                <p>
<<<<<<< HEAD
                    Anatolia19 project welcomes data contributions made within
                    the framework of academic ethics without any discrimination
                    other than the central team and adds it to the main map with
                    the contributor’s information. To do this, fill out the form
                    below and send it to us!
=======
                    Anatolia19 project welcomes data contributions made within the framework of academic ethics without
                    any discrimination other than the central team and adds it to the main map with the contributor’s
                    information. To do this, fill out the form below and send it to us!
>>>>>>> ba93093ba45a368517cb52698ef6410ae7654291
                    <br />
                    <br />
                    The standby time is between one week and two months.
                </p>

                <h2>Personal Details</h2>

                <div className="row">
                    <div className="col-xs">
                        <Input type="text" label="Full Name" placeholder="Your full name" />
                    </div>
                    <div className="col-xs">
                        <Input type="text" label="University — Optional" placeholder="Lorem?" optional={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <Input type="text" label="Email" placeholder="Your mail adress" />
                    </div>
                    <div className="col-xs">
                        <Input type="text" label="Academic Level" placeholder="Your academic level" optional={true} />
                    </div>
                </div>

<<<<<<< HEAD
                <h2>Data Details *</h2>

                <p>
                    As with any data in our Project, the data you will contribute
                    should have a location. You can do this either by entering the
                    latitude/longitude information you have or by using the tool on
                    the side and marking it on the map by auto-filling. Please zoom
                    in on the street, mountain or village of the data on the map
                    and mark it to get the most accurate result.
                </p>
                <br />

                <div className="row">
                    <div className="col-xs">
                        <Input
                            type="text"
                            label="Data Name"
                            placeholder="An explanatory short name"
                        />
                    </div>
                    <div className="col-xs">
                        <Input
                            type="text"
                            label="Data Type"
                            placeholder="Select"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <Input
                            type="text"
                            label="Latitude — Click on the map to autofill"
                            placeholder="0.000"
                            defaultValue={0}
                        />
                    </div>
                    <div className="col-xs">
                        <Input
                            type="text"
                            label="Longitude — Click on the map to autofill"
                            placeholder="0.0000"
                            defaultValue={0}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs">
                        <Input
                            type="textarea"
                            label="Note — Optional"
                            placeholder="Please write your extra notes related to the data here..."
                            defaultValue={0}
                            optional={true}
                        />
                    </div>
                </div>
=======
                <h2>Data Details</h2>
>>>>>>> ba93093ba45a368517cb52698ef6410ae7654291

                {/* <br />
                <p>
                    As with any data in our project, the data you will contribute should have a location. You can do
                    this either by entering the latitude/longitude information you have or by using the tool on the side
                    and marking it on the map by auto-filling. Please zoom in on the street, mountain or village of the
                    data on the map and mark it to post the most accurate result.
                </p>
                <br /> */}
                <br />

                <div className="row">
                    <div className="col-xs">
                        <Input type="text" label="Data Name" placeholder="An explanatory short name" />
                    </div>
                    <div className="col-xs">
                        <Input type="text" label="Data Type" placeholder="Select" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <Input type="text" label="Latitude" placeholder="0.000" defaultValue={0} />
                    </div>
                    <div className="col-xs">
                        <Input type="text" label="Longitude" placeholder="0.0000" defaultValue={0} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs">
                        <Input
                            type="textarea"
                            label="Note — Optional"
                            placeholder="Please write your extra notes related to the data here..."
                            defaultValue={0}
                            optional={true}
                        />
                    </div>
                </div>
                <br />
                <button
                    className="btn btn-sharp btn-sharp-islamic"
                    style={{
                        transform: 'translateX(2px)'
                    }}
                >
                    <span>SUBMIT</span>
                </button>
            </section>
            {/* </div> */}

            {/* <Footer /> */}
        </>
    )
}
