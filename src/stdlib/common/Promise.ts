export type MaybePromise<T> = T | Promise<T>
export type NonPromise<T> = T extends Promise<unknown> ? never : T
