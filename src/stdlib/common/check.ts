import { IllegalStateException } from './exceptions/IllegalStateException.js'

/**
 * Throws an {@link IllegalStateException} if the {@link value} is false.
 */
export function check(value: boolean): asserts value is true

/**
 * Throws an {@link IllegalStateException} with the result of calling {@link lazyMessage} if the {@link value} is false.
 */
export function check(value: boolean, lazyMessage: () => string): asserts value is true

export function check(value: boolean, lazyMessage?: () => string): asserts value is true {
  if (!value) {
    const message = lazyMessage?.() ?? 'Check failed.'
    throw new IllegalStateException(message)
  }
}
