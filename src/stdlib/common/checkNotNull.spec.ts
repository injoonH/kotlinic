import { describe, expect, it, vi } from 'vitest'
import { checkNotNull } from './checkNotNull.js'
import { IllegalStateException } from './exceptions/IllegalStateException.js'

describe('checkNotNull', () => {
  it('should not throw if value is not null', () => {
    expect(() => checkNotNull('value')).not.toThrowError()
    expect(() => checkNotNull(42)).not.toThrowError()
    expect(() => checkNotNull({})).not.toThrowError()
  })

  it('should throw IllegalStateException if value is null', () => {
    expect(() => checkNotNull(null)).toThrowError(IllegalStateException)
  })

  it('should throw IllegalStateException with default message if value is null', () => {
    expect(() => checkNotNull(null)).toThrowError('Required value was null.')
  })

  it('should throw IllegalStateException with custom message if lazyMessage is provided', () => {
    const customMessage = 'Custom error message'
    const lazyMessage = () => customMessage
    expect(() => checkNotNull(null, lazyMessage)).toThrowError(customMessage)
  })

  it('should not evaluate lazyMessage if value is not null', () => {
    const lazyMessage = vi.fn(() => 'message')
    checkNotNull('value', lazyMessage)
    expect(lazyMessage).not.toHaveBeenCalled()
  })
})
