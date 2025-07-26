import { describe, expect, it } from 'vitest'
import { IllegalStateException } from './IllegalStateException.js'

function throwIllegalStateException() {
  throw new IllegalStateException()
}

describe('IllegalStateException', () => {
  it('should have a name IllegalStateException', () => {
    expect(throwIllegalStateException).toThrowError(
      expect.objectContaining({
        name: 'IllegalStateException',
      }),
    )
  })
})
