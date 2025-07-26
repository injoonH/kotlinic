import { describe, expect, it } from 'vitest'
import { single } from './single.js'

describe('single', () => {
  it('should return the single element from an array with one element', () => {
    const result = single([42])
    expect(result).toBe(42)
  })

  it('should throw NoSuchElementException for an empty array', () => {
    expect(() => single([])).toThrowError(
      expect.objectContaining({
        name: 'NoSuchElementException',
        message: 'Array is empty.',
      }),
    )
  })

  it('should throw IllegalArgumentException for an array with more than one element', () => {
    expect(() => single([1, 2])).toThrowError(
      expect.objectContaining({
        name: 'IllegalArgumentException',
        message: 'Array has more than one element.',
      }),
    )
  })
})
