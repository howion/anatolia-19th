import { Header } from '/components/header'
import { Meta } from '/components/meta'

// IMAGES
import Image from 'next/image'
import homeIntroback from '/public/img/home-introback.jpg'

export default function Home() {
    return (
        <>
            <Meta />
            <div className="ma-home">
                <div className="ma-mwcontainer">
                    <Header/>
                    <h1>The 19th Century Anatolia Project — Web Portal</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <input type="text" />
                </div>

                <div className="ma-home-introback">
                    <Image
                        className='ma-home-introback-img'
                        src={homeIntroback}
                        alt=''
                    />
                    {/* <img src="/img/home-introback.svg" alt="" /> */}
                </div>
            </div>
        </>
    )
}
