import type { NavbarServiceObject } from '/services/navbar.service'

export function _404Navbar(): NavbarServiceObject {
    return {
        disable: true,
        hidden: true,
        buttons: []
    }
}
