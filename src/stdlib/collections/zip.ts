import { Pair } from '../common/tuples/Pair.js'

/**
 * Returns a list of pairs built from the elements of {@linkcode array} and the {@linkcode other} array with the same
 * index. The returned list has the length of the shortest collection.
 */
export function zip<T, R>(array: T[], other: R[]): Pair<T, R>[]

/**
 * Returns a list of values built from the elements of array and the {@linkcode other} array with the same index
 * using the provided {@linkcode transform} function applied to each pair of elements.
 * The returned list has the length of the shortest collection.
 */
export function zip<T, R, V>(array: T[], other: R[], transform: (a: T, b: R) => V): V[]

export function zip<T, R, V>(array: T[], other: R[], transform?: (a: T, b: R) => V): V[] {
  const size = Math.min(array.length, other.length)
  const result = new Array(size)
  const func = transform ?? ((a: T, b: R) => new Pair(a, b))
  for (let i = 0; i < size; ++i) {
    result[i] = func(array[i]!, other[i]!)
  }
  return result
}
