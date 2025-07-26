import { describe, expect, it } from 'vitest'
import { error } from './error.js'
import { IllegalStateException } from './exceptions/IllegalStateException.js'

describe('error', () => {
  it('should throw IllegalStateException with the provided message', () => {
    const message = 'This is an error message'
    expect(() => error(message)).toThrowError(IllegalStateException)
    expect(() => error(message)).toThrowError(message)
  })
})
