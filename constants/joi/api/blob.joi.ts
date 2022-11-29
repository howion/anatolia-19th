import type { BlobApiSchemaCreateBlob, BlobApiSchemaPatchBlob } from '/constants/schemas/api/blob.api.schema'
import { BlobKindPossibleValues } from '/constants/schemas/blob.schema'
import { UserUsernameJoi } from '/constants/joi/api/user.joi'
import { BranchCodeJoi } from '/constants/joi/api/branch.joi'
import { Patterns } from '/constants/patterns'
import { MarksJoi } from '/constants/joi/api/mark.joi'
import Joi from 'joi'

export const BlobNameJoi = Joi.string().max(255).pattern(Patterns.blob.name)
export const BlobCodeJoi = Joi.string().max(255).pattern(Patterns.blob.code)
export const BlobKindJoi = Joi.string().valid(...BlobKindPossibleValues)
export const BlobMarkdownJoi = Joi.string().allow('')

export const ApiCreateBlobJoi = Joi.object<BlobApiSchemaCreateBlob, true>({
    name: BlobNameJoi.required(),
    code: BlobCodeJoi.required(),
    kind: BlobKindJoi.required(),
    initiator: UserUsernameJoi.required(),
    branch: BranchCodeJoi.required(),
    marks: MarksJoi.required(),
    markdown: BlobMarkdownJoi.required()
})

export const ApiPatchBlobJoi = Joi.object<Required<BlobApiSchemaPatchBlob>, true>({
    name: BlobNameJoi.optional(),
    code: BlobCodeJoi.optional(),
    kind: BlobKindJoi.optional(),
    initiator: UserUsernameJoi.optional(),
    branch: BranchCodeJoi.optional(),
    marks: MarksJoi.optional(),
    markdown: BlobMarkdownJoi.optional()
})
