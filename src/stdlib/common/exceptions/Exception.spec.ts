import { describe, expect, it } from 'vitest'
import { Exception } from './Exception.js'

function throwException() {
  throw new Exception()
}

describe('Exception', () => {
  it('should have a name Exception', () => {
    expect(throwException).toThrowError(
      expect.objectContaining({
        name: 'Exception',
      }),
    )
  })
})
