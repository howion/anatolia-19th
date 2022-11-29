import type { BlobSchemaLite } from '/constants/schemas/blob.schema'

export interface BranchSchemaLite {
    id: number
    parent_id: number | null
    name: text
    code: text
}

export interface BranchSchema extends BranchSchemaLite {
    blobs: BlobSchemaLite[]
}
