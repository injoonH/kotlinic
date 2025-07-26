/**
 * Applies the given {@link transform} function to each element in the original array
 * and appends only the non-null results to the given {@link destination}.
 */
export function mapNotNullTo<T, R>(array: readonly T[], destination: R[], transform: (value: T) => R | null): R[] {
  array.forEach((it) => {
    const result = transform(it)
    if (result !== null) {
      destination.push(result)
    }
  })
  return destination
}
