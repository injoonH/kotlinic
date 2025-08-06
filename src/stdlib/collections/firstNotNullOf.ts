import { NoSuchElementException } from '../common/exceptions/NoSuchElementException.js'

/**
 * Returns the first non-null value produced by {@linkcode transform} function being applied
 * to elements of this array in iteration order.
 *
 * @throws {NoSuchElementException} if no non-null value was produced.
 */
export function firstNotNullOf<T, R>(array: readonly T[], transform: (value: T) => R | null): R {
  for (const value of array) {
    const result = transform(value)
    if (result !== null) {
      return result
    }
  }
  throw new NoSuchElementException('No element of the array was transformed to a non-null value.')
}
