import { Prisma, PrismaClient } from '@prisma/client'

export type {
    Feature,
    Occupation,
    Marker,
    Source,
    FeatureGeometryType
} from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

export const PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError

// biome-ignore lint/suspicious/noAssignInExpressions: -
export const Database: PrismaClient = global.prisma ?? (global.prisma = new PrismaClient())
