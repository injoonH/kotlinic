import { NoSuchElementException } from '../common/exceptions/NoSuchElementException.js'

/**
 * Returns the first element yielding the largest value of the given {@link selector} function.
 *
 * If there are multiple equal maximal values returned by the {@link selector} function,
 * this function returns the first of elements corresponding to these values.
 *
 * Note that the function {@link selector} is not invoked when the array contains zero or one elements
 * because in these cases it is clear which element to return without invoking the {@link selector}.
 * Therefore, it's recommended to avoid relying on side effects being performed by the {@link selector} function
 * on each element.
 */
export function maxBy<T, R>(array: readonly T[], selector: (value: T) => R): T {
  if (array.length === 0) throw new NoSuchElementException()
  let maxElement = array[0]!
  const lastIndex = array.length - 1
  if (lastIndex === 0) return maxElement
  let maxValue = selector(maxElement)
  for (let i = 1; i <= lastIndex; ++i) {
    const element = array[i]!
    const value = selector(element)
    if (value > maxValue) {
      maxElement = element
      maxValue = value
    }
  }
  return maxElement
}
