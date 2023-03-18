import { Prisma, PrismaClient } from '@prisma/client'

export type { Feature, Occupation, Marker, Source } from '@prisma/client'

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined
}

export const PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError

export const Database: PrismaClient = global.prisma ?? (global.prisma = new PrismaClient())
