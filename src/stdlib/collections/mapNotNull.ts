import { mapNotNullTo } from './mapNotNullTo.js'

/**
 * Returns a list containing only the non-null results of applying the given
 * {@link transform} function to each element in the original array.
 */
export function mapNotNull<T, R>(array: readonly T[], transform: (value: T) => R | null): R[] {
  return mapNotNullTo(array, [], transform)
}
