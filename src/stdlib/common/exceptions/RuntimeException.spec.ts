import { describe, expect, it } from 'vitest'
import { RuntimeException } from './RuntimeException.js'

function throwRuntimeException() {
  throw new RuntimeException()
}

describe('RuntimeException', () => {
  it('should have a name RuntimeException', () => {
    expect(throwRuntimeException).toThrowError(
      expect.objectContaining({
        name: 'RuntimeException',
      }),
    )
  })
})
