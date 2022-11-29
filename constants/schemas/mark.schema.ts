import type { BlobSchemaLite } from '/constants/schemas/blob.schema'

export interface MarkSchemaLite {
    name: text
    color: text
}

export interface MarkSchema extends MarkSchemaLite {
    id: number
    blobs: BlobSchemaLite[]
    create_time: number
    update_time: number
}
