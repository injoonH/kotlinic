import { describe, expect, it, vi } from 'vitest'
import { check } from './check.js'
import { IllegalStateException } from './exceptions/IllegalStateException.js'

describe('check', () => {
  it('should not throw if value is true', () => {
    expect(() => check(true)).not.toThrowError()
  })

  it('should throw IllegalStateException if value is false', () => {
    expect(() => check(false)).toThrowError(IllegalStateException)
  })

  it('should throw IllegalStateException with default message if value is false', () => {
    expect(() => check(false)).toThrowError('Check failed.')
  })

  it('should throw IllegalStateException with custom message if lazyMessage is provided', () => {
    const customMessage = 'Custom error message'
    const lazyMessage = () => customMessage
    expect(() => check(false, lazyMessage)).toThrowError(customMessage)
  })

  it('should not evaluate lazyMessage if check passes', () => {
    const lazyMessage = vi.fn(() => 'message')
    check(true, lazyMessage)
    expect(lazyMessage).not.toHaveBeenCalled()
  })
})
