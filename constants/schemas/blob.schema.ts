import type { UserSchemaLite } from '/constants/schemas/user.schema'
import type { BranchSchemaLite } from '/constants/schemas/branch.schema'
import type { Mark as MarkObject } from '@prisma/client'
import { BlobKind } from '@prisma/client'
import { MiscUtil } from '/utils/misc.util'
import _ from 'lodash'

export interface BlobSchemaLite {
    name: text
    code: text
    kind: text & BlobKind
    initiator: UserSchemaLite
    branch: BranchSchemaLite
    marks: text[]
    create_time: number
    update_time: number
}

export type { BlobKind, MarkObject }

export const BlobKindPossibleValues = Object.keys(BlobKind)
export const BlobKindOptions = MiscUtil.makeOptions(BlobKindPossibleValues)

export interface BlobSchema extends BlobSchemaLite {
    id: number
    markdown: text
    /**
     * TODO:
     * references:
     * dependencies:
     * dependents:
     */
}

export interface BlobSchemaWithoutMeta extends Omit<BlobSchema, 'id' | 'create_time' | 'update_time'> {}

export function BlobSchemaStripMeta(blob: BlobSchema): BlobSchemaWithoutMeta {
    return _.omit(blob, 'id', 'create_time', 'update_time')
}

export function BlobSchemaUpdate(previous: BlobSchema, updates: RecursivePartial<BlobSchema>): BlobSchema {
    return {
        ...previous,
        ...updates,
        initiator: previous.initiator,
        branch: {
            ...previous.branch,
            ...(updates.branch ?? {})
        }
    }
}
