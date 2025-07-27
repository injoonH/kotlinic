import { describe, expect, it } from 'vitest'
import { TODO } from './TODO.js'

describe('TODO', () => {
  it('should throw NotImplementedError without default reason', () => {
    expect(TODO).toThrowError('An operation is not implemented.')
  })

  it('should throw NotImplementedError with reason', () => {
    const reason = 'This feature is not implemented yet'
    expect(() => TODO(reason)).toThrowError(reason)
  })
})
