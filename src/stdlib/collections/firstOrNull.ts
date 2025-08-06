/**
 * Returns the first element, or `null` if the array is empty.
 */
export function firstOrNull<T>(array: readonly T[]): T | null {
  return array.length === 0 ? null : array[0]!
}
