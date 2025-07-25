/** biome-ignore-all lint/style/noNonNullAssertion: for mapbox reference */

import React, { useRef } from 'react'
import mapbox from 'mapbox-gl'
import { useDidMount } from 'rooks'

import { Meta } from '/components/meta'
import { Emblem } from '/components/emblem'
import { Input } from '/components/input'
import { Anchor } from '/components/anchor'

import { LoadingService } from '/services/loading.service'
import { TransitorService } from '/services/transitor.service'
import { isClient, MAPBOX_PUBLIC_TOKEN, MAPBOX_STYLE_MAP, submitData } from '/utils/client.util'

import 'mapbox-gl/dist/mapbox-gl.css'

export default function Contact(): FCReturn {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = React.useRef<HTMLDivElement>(null)
    const markerRef = React.useRef<mapboxgl.Marker | null>(null)

    const input_personal_name = useRef<HTMLInputElement>(null)
    const input_personal_university = useRef<HTMLInputElement>(null)
    const input_personal_email = useRef<HTMLInputElement>(null)
    const input_personal_academiclevel = useRef<HTMLInputElement>(null)
    const input_data_name = useRef<HTMLInputElement>(null)
    const input_data_type = useRef<HTMLInputElement>(null)
    const input_data_lat = useRef<HTMLInputElement>(null)
    const input_data_lon = useRef<HTMLInputElement>(null)
    const input_data_note = useRef<HTMLInputElement>(null)

    useDidMount(() => {
        if (!isClient() || mapRef.current) return
        mapbox.accessToken = MAPBOX_PUBLIC_TOKEN

        // mapRef.current!.addEventListener('contextmenu', (e) => e.preventDefault())

        mapRef.current = new mapbox.Map({
            container: mapContainerRef.current!,
            style: MAPBOX_STYLE_MAP,
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
            input_data_lat.current!.value = String(lngLat.lat)
            input_data_lon.current!.value = String(lngLat.lng)

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

    async function handleSubmit(): Promise<void> {
        const data = {
            personal: {
                name: input_personal_name.current!.value,
                university: input_personal_university.current!.value,
                email: input_personal_email.current!.value,
                academicLevel: input_personal_academiclevel.current!.value
            },
            data: {
                name: input_data_name.current!.value,
                type: input_data_type.current!.value,
                lat: input_data_lat.current!.value,
                lon: input_data_lon.current!.value,
                description: input_data_note.current!.value
            }
        }

        if (
            !data.personal.name ||
            !data.personal.email ||
            !data.personal.academicLevel ||
            !data.data.name ||
            !data.data.type ||
            !data.data.lat ||
            !data.data.lon ||
            !data.data.description
        ) {
            alert('Please fill all the required fields.')
            return
        }

        LoadingService.set(true)

        const res = await submitData(data)

        console.log(res)

        if (!res || !res.success) {
            alert('An error occured while submitting data. Please try again later.')
        } else {
            alert('Success! Your data will be reviewed and added to the map soon. Thank you for your contribution.')

            input_personal_name.current!.value = ''
            input_personal_university.current!.value = ''
            input_personal_email.current!.value = ''
            input_personal_academiclevel.current!.value = ''

            input_data_name.current!.value = ''
            input_data_type.current!.value = ''
            input_data_lat.current!.value = ''
            input_data_lon.current!.value = ''
            input_data_note.current!.value = ''
        }

        LoadingService.set(false)
    }

    return (
        <>
            <Meta title="Submit Data" />

            {/* <div className="ma-contact-container"> */}
            <section className="ma-contact-map-container">
                <div className="ma-map-search-container ma-map-search-container--contact">
                    <Anchor href="/" animate>
                        <button className="btn btn-icon" type="button">
                            <i className="material-icons">arrow_back</i>
                        </button>
                    </Anchor>
                </div>
                <div ref={mapContainerRef} className="ma-contact-map" />
            </section>

            <section className="ma-contact-content">
                <Emblem h={72} />
                <h1>Submit New Data</h1>
                <br />
                <p>
                    Anatolia19 project welcomes data contributions made within the framework of academic ethics without
                    any discrimination other than the central team and adds it to the main map with the contributor’s
                    information. To do this, fill out the form below and send it to us!
                    <br />
                    <br />
                    The standby time is between one week and two months.
                </p>

                <h2>Personal Details</h2>

                <div className="row">
                    <div className="col-xs">
                        <Input ref={input_personal_name} type="text" label="Full Name" placeholder="Your full name" />
                    </div>
                    <div className="col-xs">
                        <Input
                            ref={input_personal_university}
                            type="text"
                            label="University — Optional"
                            placeholder="Lorem?"
                            optional={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <Input ref={input_personal_email} type="text" label="Email" placeholder="Your mail adress" />
                    </div>
                    <div className="col-xs">
                        <Input
                            ref={input_personal_academiclevel}
                            type="text"
                            label="Academic Level"
                            placeholder="Your academic level"
                            optional={true}
                        />
                    </div>
                </div>

                <h2>Data Details</h2>

                <br />
                <p>
                    As with any data in our project, the data you will contribute should have a location. You can do
                    this either by entering the latitude/longitude information you have or by using the tool on the side
                    and marking it on the map by auto-filling. Please zoom in on the street, mountain or village of the
                    data on the map and mark it to post the most accurate result.
                </p>
                <br />

                <div className="row">
                    <div className="col-xs">
                        <Input
                            ref={input_data_name}
                            type="text"
                            label="Data Name"
                            placeholder="An explanatory short name"
                        />
                    </div>
                    <div className="col-xs">
                        <Input
                            ref={input_data_type}
                            type="text"
                            label="Data Type"
                            placeholder="For example: Mine, Merchant etc."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <Input ref={input_data_lat} type="text" label="Latitude" placeholder="0.000" defaultValue={0} />
                    </div>
                    <div className="col-xs">
                        <Input
                            ref={input_data_lon}
                            type="text"
                            label="Longitude"
                            placeholder="0.0000"
                            defaultValue={0}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs">
                        <Input
                            ref={input_data_note}
                            type="textarea"
                            label="Describe Your Data"
                            placeholder="Please write your notes related to the data here..."
                            defaultValue=""
                            optional={false}
                        />
                    </div>
                </div>
                <br />
                <button
                    className="btn btn-sharp btn-sharp-islamic"
                    style={{
                        transform: 'translateX(2px)'
                    }}
                    type="button"
                >
                    <span onClick={handleSubmit}>SUBMIT</span>
                </button>
            </section>
            {/* </div> */}

            {/* <Footer /> */}
        </>
    )
}
