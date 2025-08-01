import { Pair } from '../common/tuples/Pair.js'

/**
 * Returns a list of pairs of each two adjacent elements in this collection.
 *
 * The returned list is empty if this collection contains less than two elements.
 */
export function zipWithNext<T>(array: T[]): Pair<T, T>[]

/**
 * Returns a list containing the results of applying the given {@linkcode transform} function
 * to each pair of two adjacent elements in this collection.
 *
 * The returned list is empty if this collection contains less than two elements.
 */
export function zipWithNext<T, R>(array: T[], transform: (a: T, b: T) => R): R[]

export function zipWithNext<T, R>(array: T[], transform?: (a: T, b: T) => R): R[] {
  if (array.length < 2) {
    return []
  }
  const result = new Array(array.length - 1)
  const func = transform ?? ((a: T, b: T) => new Pair(a, b))
  for (let i = 0; i < result.length; ++i) {
    result[i] = func(array[i]!, array[i + 1]!)
  }
  return result
}
