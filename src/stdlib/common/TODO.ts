import { NotImplementedError } from './exceptions/NotImplementedError.js'

/**
 * Always throws {@linkcode NotImplementedError} stating that operation is not implemented.
 */
export function TODO(): never

/**
 * Always throws {@linkcode NotImplementedError} stating that operation is not implemented.
 *
 * @param reason a string explaining why the implementation is missing.
 */
export function TODO(reason: string): never

export function TODO(reason?: string): never {
  throw new NotImplementedError(reason)
}
