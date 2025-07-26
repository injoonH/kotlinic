import { describe, expect, it, vi } from 'vitest'
import { IllegalArgumentException } from './exceptions/IllegalArgumentException.js'
import { require } from './require.js'

describe('require', () => {
  it('should not throw if value is true', () => {
    expect(() => require(true)).not.toThrowError()
  })

  it('should throw IllegalArgumentException if value is false', () => {
    expect(() => require(false)).toThrowError(IllegalArgumentException)
  })

  it('should throw IllegalArgumentException with default message if value is false', () => {
    expect(() => require(false)).toThrowError('Failed requirement.')
  })

  it('should throw IllegalArgumentException with custom message if lazyMessage is provided', () => {
    const customMessage = 'Custom error message'
    const lazyMessage = () => customMessage
    expect(() => require(false, lazyMessage)).toThrowError(customMessage)
  })

  it('should not evaluate lazyMessage if require passes', () => {
    const lazyMessage = vi.fn(() => 'message')
    require(true, lazyMessage)
    expect(lazyMessage).not.toHaveBeenCalled()
  })
})
