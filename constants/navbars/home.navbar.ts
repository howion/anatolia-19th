import type { NavbarServiceObject } from '/services/navbar.service'

export function HomeNavbar(): NavbarServiceObject {
    return {
        disable: false,
        hidden: false,
        buttons: [
            {
                /* Go to Map */
                href: '/map',
                icon: 'explore'
            },
            {
                /* Create a new Blob */
                href: '/blob/new',
                icon: 'add'
            }
        ]
    }
}
