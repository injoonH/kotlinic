import { describe, expect, it } from 'vitest'
import { NoSuchElementException } from './NoSuchElementException.js'

function throwNoSuchElementException() {
  throw new NoSuchElementException()
}

describe('NoSuchElementException', () => {
  it('should have a name NoSuchElementException', () => {
    expect(throwNoSuchElementException).toThrowError(
      expect.objectContaining({
        name: 'NoSuchElementException',
      }),
    )
  })
})
