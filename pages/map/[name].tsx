/** biome-ignore-all lint/style/noNonNullAssertion: - */
import type { GetServerSidePropsContext } from 'next'
import type { ApiFeature, ApiFeaturesReponse } from '/constants/schemas/feature.schema'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useDebounce, useDidMount } from 'rooks'
import mapbox from 'mapbox-gl'
import { useRouter } from 'next/router'
import moment from 'moment'

import { Meta } from '/components/meta'
import { Emblem } from '/components/emblem'
import { TransitorService } from '/services/transitor.service'
import { Anchor } from '/components/anchor'
import { isClient, MAPBOX_PUBLIC_TOKEN, MAPBOX_STYLE_MAP, retrieveFeature, searchFeatures } from '/utils/client.util'

import 'mapbox-gl/dist/mapbox-gl.css'
import { MapShare } from '/components/map-share'
import { LoadingService } from '/services/loading.service'

import { retrieveAllFeatures, retrieveFeatureBySid } from '/models/feature.modal'

function getModalWidth(): number {
    if (!window) return 0
    const modalRef = window.document.querySelector('.ma-map-modal') as HTMLDivElement | null
    if (!modalRef) return 0
    return modalRef.offsetWidth ?? 0
}

export interface MapProps {
    features: ApiFeaturesReponse | null
    activeFeature: null | ApiFeature
}

export async function getServerSideProps({ params }: GetServerSidePropsContext): Promise<{ props: MapProps }> {
    const features = (await retrieveAllFeatures()) as ApiFeaturesReponse
    const sid = params?.name ?? 'index'
    let activeFeature = null

    if (sid && sid !== 'index') activeFeature = await retrieveFeatureBySid(sid as text)

    return {
        props: {
            features,
            activeFeature
        }
    }
}

export default function MapP({ features, activeFeature: _activeFeature }: any): FCReturn {
    // const [viewState, setViewState] = React.useState<DECK_ViewState>(InitialViewState)
    const [showControls, setShowControls] = useState(true)
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const [isModalActive, setIsModalActive] = useState(false)
    // const features = useRef<ApiFeaturesReponse | null>(null)
    // const [featureMarkers, setFeatureMarkers] = useState<Record<text, mapbox.Marker>>({})
    const [activeFeature, setActiveFeature] = useState<ApiFeature | null>(null)

    const [searchQuery, setSearchQuery] = useState('')
    const setValueDebounced = useDebounce(setSearchQuery, 500)

    const [searchResults, setSearchResults] = useState<any[]>([])
    const [isShareOpen, setIsShareOpen] = useState(false)

    const router = useRouter()

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
            duration: 1000,
            essential: true
        })
    }, [])

    const setFeatureModal = (_feature: ApiFeature) => {
        setActiveFeature(_feature)

        setShowControls(false)
        setIsModalActive(true)

        // if (customModalMarker) // TODO:

        const mk = new mapbox.Marker().setLngLat([_feature.lon, _feature.lat]).addTo(mapRef.current!)

        mk.getElement().addEventListener('click', () => {
            showModal(_feature.id)
        })

        // setCustomModalMarker(mk)

        mapRef.current!.flyTo({
            center: [_feature.lon, _feature.lat],
            zoom: 16,
            animate: true,
            duration: 4000,
            pitch: 0,
            bearing: 0,
            essential: true,
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: getModalWidth()
            }
        })
    }

    // biome-ignore lint/correctness/useExhaustiveDependencies: invalid deduction
    const showModal = useCallback(
        (id: number) => {
            LoadingService.set(true)
            retrieveFeature(id).then((res: any) => {
                if (!res?.success) return

                // chnage the url with next router but do not reload the page
                router.push(`/map/${res.data.sid}`, undefined, {
                    shallow: true
                })

                // TODO: Remove this
                console.log('feature:', res.data)

                setFeatureModal(res.data)

                LoadingService.set(false)
            })
        },
        [router]
    )

    useDidMount(async () => {
        // make sure the map is initialized only once
        if (!isClient() || mapRef.current) return

        mapbox.accessToken = MAPBOX_PUBLIC_TOKEN

        // const _features = await ClientUtil.retrieveAllFeatures()
        // // const featureMarkers: Record<text, mapbox.Marker> = {}

        // if (_features && _features.success) {
        //     features.current = _features.data

        //     // TODO: Remove this
        //     console.log(features.current)

        //     // for (const pid in points) {
        //     //     const point = points[pid]
        //     //     const marker = new mapbox.Marker().setLngLat([point.lon, point.lat]).addTo(map)
        //     //     const pidn = Number.parseInt(pid)
        //     //     featureMarkers[pidn] = marker
        //     //     marker.getElement().addEventListener('click', () => showModal(pidn))
        //     // }
        // }

        mapRef.current = new mapbox.Map({
            container: mapContainerRef.current!,
            style: MAPBOX_STYLE_MAP,
            center: [35, 39],
            zoom: 6,
            attributionControl: true,
            boxZoom: false,
            logoPosition: 'bottom-right',
            antialias: false
            // bounds: [
            //     [35.947835, 23.537402], // SW
            //     [42.414684, 42.755552] // NE
            // ]
        })

        const map = mapRef.current

        // if (process.env.NODE_ENV === 'production') {
        // ....addEventListener('contextmenu', (e) => e.preventDefault())
        // }

        map.on('load', () => {
            TransitorService.hideTransitor()
            if (_activeFeature) setFeatureModal(_activeFeature)

            const { GSON } = features

            map.addSource('points', {
                type: 'geojson',
                data: GSON as any,
                cluster: true,
                clusterMaxZoom: 10, // Max zoom to cluster points on
                clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
            })

            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'points',
                filter: ['has', 'point_count'],
                paint: {
                    // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                    // with three steps to implement three types of circles:
                    //   * Blue, 20px circles when point count is less than 100
                    //   * Yellow, 30px circles when point count is between 100 and 750
                    //   * Pink, 40px circles when point count is greater than or equal to 750
                    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
                    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
                }
            })

            map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'points',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': ['get', 'point_count_abbreviated'],
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            })

            map.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'points',
                filter: ['!', ['has', 'point_count']],
                paint: {
                    'circle-color': '#11b4da',
                    'circle-radius': 8,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#fff'
                }
            })

            map.on('click', 'unclustered-point', (e) => {
                const feature = e.features![0]
                showModal(feature!.properties!.id)
            })
        })

        if (map.loaded()) TransitorService.hideTransitor()

        // map.dragRotate.disable()
        // map.touchZoomRotate.disableRotation()

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
    })

    if (isClient()) {
        const el = document.querySelector<HTMLDivElement>('.mapboxgl-control-container')
        if (el) el.style.display = showControls ? 'block' : 'none'
    }

    // const SW = [34.8, 24.5]
    // const NE = [41.8, 44.8]
    // const Boundaires = [SE, NE]

    // const handleQueryInput = useCallback((query: text) => {
    //     setValueDebounced(query)
    // }, [searchQuery])

    useEffect(() => {
        if (!searchQuery) return setSearchResults([])
        LoadingService.set(true)
        searchFeatures(searchQuery).then((res) => {
            if (!res || !res.success) return setSearchResults([])
            setSearchResults(res.data)
            LoadingService.set(false)
        })
    }, [searchQuery])

    return (
        <>
            <Meta title="Map" />
            <MapShare feature={activeFeature} open={isShareOpen} onClose={() => setIsShareOpen(false)} />
            <div className="ma-map-emblem">
                <Emblem h={60} textFill="#fff" />
            </div>
            <div className="ma-map-search-container">
                <div className="ma-map-search-lhs">
                    <Anchor href="/" animate>
                        <button className="btn btn-icon" type="button">
                            <i className="material-icons">arrow_back</i>
                        </button>
                    </Anchor>
                </div>
                <div className="ma-map-search-rhs">
                    <input
                        onChange={(e) => setValueDebounced(e.target.value)}
                        className="ma-map-search-input"
                        type="text"
                        placeholder="Search in 19th Century Anatolia Project..."
                    />
                    {searchResults && searchResults.length > 0 && (
                        <div className="ma-map-search-results">
                            <div className="ma-map-search-results-label">FEATURES</div>
                            {searchResults.map((result) => (
                                <div
                                    key={result.id}
                                    className="ma-map-search-results-result"
                                    onClick={() => showModal(result.id)}
                                >
                                    {`${result.name}, ${result.city}, ${result.occupations
                                        .map((s: any) => s.name)
                                        .join(', ')}`}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {activeFeature ? (
                <div className={`ma-map-modal-container${isModalActive ? ' --active' : ''}`}>
                    <div className="ma-map-modal-buttons">
                        <button className="btn btn-icon" onClick={hideModal} type="button">
                            <i className="material-icons">close</i>
                        </button>
                        <button className="btn btn-icon" type="button">
                            <i className="material-icons" onClick={() => setIsShareOpen(true)}>
                                share
                            </i>
                        </button>
                    </div>
                    <div className="ma-map-modal">
                        <span className="ma-map-modal-label">DATA SUMMARY</span>
                        <h1 className="ma-map-modal-title">{activeFeature.name}*</h1>
                        <span className="ma-map-modal-tag">{activeFeature.city}</span>
                        {activeFeature.occupations.map((occupation: any) => (
                            <span key={occupation.name} className="ma-map-modal-tag">
                                {occupation.name}
                            </span>
                        ))}
                        {/* <span className="ma-map-modal-tag">Writer</span> */}
                        <div className="ma-map-modal-markdown">
                            <p>{activeFeature.markdown}</p>
                        </div>
                        <ul className="ma-map-modal-footnotes">
                            {!activeFeature.isLocationPrecise && (
                                <li data-footnote-label="*" className="ma-map-modal-footnotes-footnote">
                                    Since the location of this entry not precisely known, approximate location is shown
                                    based on ethnicity and socio-economic status. Please visit the source for details.
                                </li>
                            )}
                            <li
                                data-footnote-label="*"
                                className="ma-map-modal-footnotes-footnote"
                            >{`[lat, lon] = [${activeFeature.lat}, ${activeFeature.lon}]`}</li>
                        </ul>
                    </div>
                    <div className="ma-map-modal">
                        <span className="ma-map-modal-label">REFERENCES</span>
                        <ol className="ma-map-modal-references">
                            {/* <li>
                                Rush, E. C., Obolonkin, V., Battin, M., Wouldes, T., & Rowan, J. (2015b). Body composition
                                in offspring of New Zealand women: Ethnic and gender differences at age 1–3 years in
                                2005–2009. Annals Of Human Biology, 42(5), 492–497.
                            </li> */}
                            {/* <li>Commercial 1978</li> */}
                            {activeFeature.sources.map((ref) => (
                                <li key={ref.shortName}>
                                    <a href={ref.url ?? '#'} target="_blank">
                                        {ref.source}
                                        {activeFeature.sourceDetail?.p ? ` (p. ${activeFeature.sourceDetail.p}).` : ''}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="ma-map-modal">
                        <span className="ma-map-modal-label">ACTIVITIES</span>
                        <ul className="ma-map-modal-activities">
                            <li className="ma-map-modal-activities-activity">
                                <div className="ma-map-modal-activities-activity-lhs">
                                    <i
                                        style={{
                                            backgroundColor: '#00C34E'
                                        }}
                                        className="material-icons ma-map-modal-activities-activity-lhs-icon"
                                    >
                                        place
                                    </i>
                                </div>
                                <div className="ma-map-modal-activities-activity-rhs">
                                    <span className="ma-map-modal-activities-activity-rhs-title">
                                        <em>{activeFeature.author.name}</em> created the record with id #
                                        {activeFeature.id}.
                                    </span>
                                    <span className="ma-map-modal-activities-activity-rhs-subtitle">
                                        {moment(activeFeature.createdAt).format('DD MMMM YYYY')}
                                    </span>
                                    {/* <div className="ma-map-modal-activities-activity-rhs-content"> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : undefined}
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
