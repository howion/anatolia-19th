import type { UserRole } from '@prisma/client'
import type { BlobSchemaLite } from '/constants/schemas/blob.schema'

export type { UserRole }

export interface UserSchemaLite {
    name: text
    surname: text
    username: text
    role: text & UserRole
    avatar: text
}

export interface UserSchema extends UserSchemaLite {
    id: number
    email: text
    email_verified: boolean
    secret: text
    bio: text
    // activities
    blobs_initiated: Omit<BlobSchemaLite, 'initiator'>[]
    create_time: number
    update_time: number
}
