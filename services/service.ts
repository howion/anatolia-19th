export interface Service<T> {
    new (...args: any[]): object
    /* static */ subscribe(callback: (hidden: T) => void): void
}
