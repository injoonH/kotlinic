import { Result } from './Result.js'

/**
 * Calls the specified function {@linkcode block} and returns its encapsulated result if invocation was successful,
 * catching any {@linkcode Throwable} exception that was thrown from the {@linkcode block} function execution
 * and encapsulating it as a failure.
 */
export function runCatching<T>(block: () => T): Result<T> {
  try {
    return Result.success(block())
  } catch (error) {
    return Result.failure(error)
  }
}
