import { NoSuchElementException } from '../common/exceptions/NoSuchElementException.js'

/**
 * Returns the first element.
 *
 * @throws {NoSuchElementException} if the array is empty.
 */
export function first<T>(array: readonly T[]): T {
  if (array.length === 0) throw new NoSuchElementException('Array is empty.')
  return array[0]!
}
