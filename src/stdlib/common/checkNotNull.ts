import { IllegalStateException } from './exceptions/IllegalStateException.js'

/**
 * Throws an {@link IllegalStateException} if the {@link value} is null.
 */
export function checkNotNull<T>(value: T): asserts value is Exclude<T, null>

/**
 * Throws an {@link IllegalStateException} with the result of calling {@link lazyMessage}  if the {@link value} is null.
 */
export function checkNotNull<T>(value: T, lazyMessage: () => string): asserts value is Exclude<T, null>

export function checkNotNull<T>(value: T, lazyMessage?: () => string): asserts value is Exclude<T, null> {
  if (value === null) {
    const message = lazyMessage?.() ?? 'Required value was null.'
    throw new IllegalStateException(message)
  }
}
