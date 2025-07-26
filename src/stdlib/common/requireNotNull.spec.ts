import { describe, expect, it, vi } from 'vitest'
import { IllegalArgumentException } from './exceptions/IllegalArgumentException.js'
import { requireNotNull } from './requireNotNull.js'

describe('requireNotNull', () => {
  it('should not throw if value is not null', () => {
    expect(() => requireNotNull('value')).not.toThrowError()
    expect(() => requireNotNull(42)).not.toThrowError()
    expect(() => requireNotNull({})).not.toThrowError()
  })

  it('should throw IllegalArgumentException if value is null', () => {
    expect(() => requireNotNull(null)).toThrowError(IllegalArgumentException)
  })

  it('should throw IllegalArgumentException with default message if value is null', () => {
    expect(() => requireNotNull(null)).toThrowError('Required value was null.')
  })

  it('should throw IllegalArgumentException with custom message if lazyMessage is provided', () => {
    const customMessage = 'Custom error message'
    const lazyMessage = () => customMessage
    expect(() => requireNotNull(null, lazyMessage)).toThrowError(customMessage)
  })

  it('should not evaluate lazyMessage if value is not null', () => {
    const lazyMessage = vi.fn(() => 'message')
    requireNotNull('value', lazyMessage)
    expect(lazyMessage).not.toHaveBeenCalled()
  })
})
