/**
 * Executes the given function {@linkcode action} specified number of {@linkcode times}.
 *
 * A zero-based index of current iteration is passed as a parameter to the {@linkcode action} function.
 *
 * If the {@linkcode times} parameter is negative or equal to zero, the {@linkcode action} function is not invoked.
 */
export function repeat(times: number, action: (index: number) => void) {
  for (let i = 0; i < times; ++i) {
    action(i)
  }
}
