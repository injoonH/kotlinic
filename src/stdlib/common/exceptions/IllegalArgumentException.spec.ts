import { describe, expect, it } from 'vitest'
import { IllegalArgumentException } from './IllegalArgumentException.js'

function throwIllegalArgumentException() {
  throw new IllegalArgumentException()
}

describe('IllegalArgumentException', () => {
  it('should have a name IllegalArgumentException', () => {
    expect(throwIllegalArgumentException).toThrowError(
      expect.objectContaining({
        name: 'IllegalArgumentException',
      }),
    )
  })
})
