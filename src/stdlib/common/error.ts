import { IllegalStateException } from './exceptions/IllegalStateException.js'

/**
 * Throws an {@link IllegalStateException} with the given {@link message}.
 */
export function error(message: string): never {
  throw new IllegalStateException(message)
}
