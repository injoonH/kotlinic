import { IllegalArgumentException } from '../common/exceptions/IllegalArgumentException.js'
import { NoSuchElementException } from '../common/exceptions/NoSuchElementException.js'

/**
 * Returns the single element, or throws an exception if the array is empty or has more than one element.
 */
export function single<T>(array: readonly T[]): T {
  if (array.length === 0) throw new NoSuchElementException('Array is empty.')
  if (array.length > 1) throw new IllegalArgumentException('Array has more than one element.')
  return array[0]!
}
