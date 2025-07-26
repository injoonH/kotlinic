import { IllegalArgumentException } from './exceptions/IllegalArgumentException.js'

/**
 * Throws an {@link IllegalArgumentException} if the {@link value} is null.
 */
export function requireNotNull<T>(value: T): asserts value is Exclude<T, null>

/**
 * Throws an {@link IllegalArgumentException} with the result of calling {@link lazyMessage} if the {@link value} is null.
 */
export function requireNotNull<T>(value: T, lazyMessage: () => string): asserts value is Exclude<T, null>

export function requireNotNull<T>(value: T, lazyMessage?: () => string): asserts value is Exclude<T, null> {
  if (value === null) {
    const message = lazyMessage?.() ?? 'Required value was null.'
    throw new IllegalArgumentException(message)
  }
}
