import { Anchor } from './anchor'
import { Emblem } from '/components/emblem'

interface NavbarProps {}

export function Navbar(): FCReturn<NavbarProps> {
    return (
        <header className="ma-navbar">
            <Anchor href="/" animate>
                <Emblem h={72} />
            </Anchor>
            <Anchor href="/submit-data" animate>
                <button className="btn btn-round" type="button">
                    {/* <i className="material-icons">add</i> */}
                    <span>SUBMIT DATA</span>
                </button>
            </Anchor>
        </header>
    )
}
