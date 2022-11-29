import { ModalService, ModalServiceObject } from '/services/modal.service'
import { ApiFailureResponseError } from '/types/api'

export const BlobModals: Record<text, (...params: any[]) => Omit<ModalServiceObject, 'hidden'>> = {
    onDelete: (oldName: text, onDeleteClick: () => void) => ({
        title: `"${oldName}" will be deleted!`,
        text: 'This action is irreversible!',
        buttons: [
            {
                label: 'Cancel',
                modifiers: ['blue', 'borderless'],
                onClick: ModalService.hideModal
            },
            {
                label: 'Delete',
                modifiers: ['red'],
                onClick: onDeleteClick
            }
        ]
    }),
    onSave: (newName: text, onSaveClick: () => void) => ({
        title: `Do you want to save "${newName}"?`,
        text: 'There is no history feature...yet.',
        buttons: [
            {
                label: 'Cancel',
                modifiers: ['blue', 'borderless'],
                onClick: ModalService.hideModal
            },
            {
                label: 'Save',
                modifiers: ['green'],
                onClick: onSaveClick
            }
        ]
    }),
    onFailure: (error: ApiFailureResponseError, onClose?: () => void) => ({
        title: 'Uh Oh. We have a situation.',
        text: error.message,
        buttons: [
            {
                label: 'Close',
                modifiers: ['red'],
                onClick: () => {
                    ModalService.hideModal()
                    if (onClose) onClose()
                }
            }
        ]
    })
}
