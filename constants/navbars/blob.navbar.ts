import type { NavbarServiceObject } from '/services/navbar.service'
import type { NavbarButtonProps } from '../../___mathematica/components/navbar'
import type { ViewMode } from '/pages/blob/[code]/[[...params]]'
import type { BlobSchema } from '/constants/schemas/blob.schema'
import { ModalService } from '/services/modal.service'
import { BlobModals } from '/constants/modals/blob.modals'

export interface BlobNavbarProps {
    mode: ViewMode
    blobObject: BlobSchema
    save: () => void
    delete: () => void
}

export function BlobNavbar(props: BlobNavbarProps): NavbarServiceObject {
    const buttons: NavbarButtonProps[] = []
    const path = `/blob/${props.blobObject.branch.code}.${props.blobObject.code}`

    if (props.mode === 'read') {
        buttons.push(
            {
                /* Go to Home */
                href: '/',
                icon: 'home'
            },
            {
                /* Go to the Map */
                href: '/map',
                icon: 'explore'
            },
            {
                /* Create a new blob */
                href: '/blob/new',
                rel: 'nofollow',
                icon: 'add'
            },
            {
                /* Edit Blob */
                href: `${path}/edit`,
                rel: 'nofollow',
                icon: 'edit',
                className: 'shrink'
            }
        )
    }

    if (props.mode === 'edit' || props.mode === 'new') {
        buttons.push(
            {
                /* Back (Go to Blob Home) */
                href: 'javascript: window.history.back();',
                icon: 'arrow_back'
            },
            {
                /* Save Blob */
                icon: 'save',
                className: 'shrink save',
                onClick: () => ModalService.showModal(BlobModals.onSave(props.blobObject.name, props.save))
            },
            {
                /* Delete Blob */
                icon: 'delete',
                className: 'shrink delete',
                onClick: () => ModalService.showModal(BlobModals.onDelete(props.blobObject.name, props.delete))
            }
        )
    }

    return {
        disable: false,
        hidden: false,
        buttons: buttons
    }
}
