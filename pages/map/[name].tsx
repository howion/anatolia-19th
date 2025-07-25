import type { GetServerSidePropsContext } from 'next'
import type { ApiFeaturesReponse } from '/constants/schemas/feature.schema'
import type { MapProps } from '/components/map-for-lazyload'

import dynamic from 'next/dynamic'
import { retrieveAllFeatures, retrieveFeatureBySid } from '/models/feature.modal'
import { Meta } from '/components/meta'

const MapForLazyLoad = dynamic(() => import('/components/map-for-lazyload').then(m => m.MapForLazyLoad), {
    ssr: false
})

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

export default function MapP(props: MapProps): FCReturn {
    return (
        <>
            <Meta title="Map" />
            <MapForLazyLoad features={props.features} activeFeature={props.activeFeature} />
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
