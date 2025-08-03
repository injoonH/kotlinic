import type { MaybePromise, NonPromise } from './Promise.js'
import { Result } from './Result.js'

/**
 * Calls the specified function {@linkcode block} and returns its encapsulated result if invocation was successful,
 * catching any {@linkcode Throwable} exception that was thrown from the {@linkcode block} function execution
 * and encapsulating it as a failure.
 */
export function runCatching<T>(block: () => NonPromise<T>): Result<T>

/**
 * Calls the specified function {@linkcode block} and returns its encapsulated result if invocation was successful,
 * catching any {@linkcode Throwable} exception that was thrown from the {@linkcode block} function execution
 * and encapsulating it as a failure.
 */
export function runCatching<T>(block: () => Promise<T>): Promise<Result<T>>

export function runCatching<T>(block: () => MaybePromise<T>): MaybePromise<Result<T>> {
  try {
    const value = block()
    return value instanceof Promise
      ? value.then((it) => Result.success(it)).catch((it) => Result.failure(it))
      : Result.success(value)
  } catch (error) {
    return Result.failure(error)
  }
}
