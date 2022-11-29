import { BlobKind } from '/constants/schemas/blob.schema'

export interface BlobApiSchemaCreateBlob {
    name: text
    code: text
    kind: text & BlobKind
    initiator: text // username
    branch: text // branch_code
    marks: text[] // mark_name[]
    markdown: text
}

export interface BlobApiSchemaPatchBlob extends Partial<BlobApiSchemaCreateBlob> {}
