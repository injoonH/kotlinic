/**
 * Returns single element, or `null` if the array is empty or has more than one element.
 */
export function singleOrNull<T>(array: readonly T[]): T | null {
  return array.length === 1 ? array[0]! : null
}
