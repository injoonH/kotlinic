/**
 * Returns {@linkcode value} if it _does not_ satisfy the given {@linkcode predicate} or `null`, if it does.
 */
export function takeUnless<T>(value: T, predicate: (value: T) => boolean): T | null {
  return predicate(value) ? null : value
}
