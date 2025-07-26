import { IllegalArgumentException } from './exceptions/IllegalArgumentException.js'

/**
 * Throws an {@link IllegalArgumentException} if the {@link value} is false.
 */
export function require(value: boolean): asserts value is true

/**
 * Throws an {@link IllegalArgumentException} with the result of calling {@link lazyMessage} if the {@link value} is false.
 */
export function require(value: boolean, lazyMessage: () => string): asserts value is true

export function require(value: boolean, lazyMessage?: () => string): asserts value is true {
  if (!value) {
    const message = lazyMessage?.() ?? 'Failed requirement.'
    throw new IllegalArgumentException(message)
  }
}
