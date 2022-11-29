import type { NavbarServiceObject } from '/services/navbar.service'

export function MapNavbar(): NavbarServiceObject {
    return {
        disable: false,
        hidden: false,
        buttons: [
            {
                /* Go Home */
                href: '/',
                icon: 'home'
            }
        ]
    }
}
