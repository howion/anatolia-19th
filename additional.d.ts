// import type { FC } from 'react'

declare type FCProps<P = object> = Parameters<React.FC<P>>[0]
declare type FCReturn<P = object> = ReturnType<React.FC<P>>

declare type text = string

declare type Constructor<T> = new (...args: any[]) => T

declare type SafeObject<T = any> = Record<text, T>

type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : // eslint-disable-next-line @typescript-eslint/ban-types
        T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P]
}

declare type StaticImplements<I extends new (...args: any[]) => any, C extends I> = InstanceType<I>

declare type Mutable<T> = { -readonly [P in keyof T]: T[P] }

declare type Option<V = any> = {
    label: text
    value: V
}
