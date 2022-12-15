import Image from 'next/image'
import { Meta } from '/components/meta'

export default function Home(): FCReturn {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Meta />
            <h1>Hi mom!</h1>
        </div>
    )
}
