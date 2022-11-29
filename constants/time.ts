export const SECOND = 1000 as const
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE

export const SECONDS = (m: number): number => m * SECOND
export const MINUTES = (m: number): number => m * MINUTE
export const HOURS = (m: number): number => m * HOUR
