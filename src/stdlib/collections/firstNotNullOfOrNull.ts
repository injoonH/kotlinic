/**
 * Returns the first non-null value produced by {@linkcode transform} function being applied
 * to elements of this array in iteration order, or `null` if no non-null value was produced.
 */
export function firstNotNullOfOrNull<T, R>(array: readonly T[], transform: (value: T) => R | null): R | null {
  for (const value of array) {
    const result = transform(value)
    if (result !== null) {
      return result
    }
  }
  return null
}
