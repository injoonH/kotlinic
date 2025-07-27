/**
 * Returns {@linkcode value} if it satisfies the given {@linkcode predicate} or `null`, if it doesn't.
 */
export function takeIf<T>(value: T, predicate: (value: T) => boolean): T | null {
  return predicate(value) ? value : null
}
