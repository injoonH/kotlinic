import { describe, expect, it, vi } from 'vitest'
import { maxBy } from './maxBy.js'

describe('maxBy', () => {
  it('should return the element with the maximum value based on the selector function', () => {
    const array = [1, 3, 2, 5, 4]
    const result = maxBy(array, (x) => x)
    expect(result).toBe(5)
  })

  it('should return the first element if the array has one element', () => {
    const array = [42]
    const result = maxBy(array, (x) => x)
    expect(result).toBe(42)
  })

  it('should not call the selector function if the array has one element', () => {
    const array = [42]
    const selector = vi.fn((x) => x)
    const result = maxBy(array, selector)
    expect(result).toBe(42)
    expect(selector).not.toHaveBeenCalled()
  })

  it('should return the first element with the maximum value if there are multiple equal maximum values', () => {
    const array = [1, 3, 5]
    const result = maxBy(array, (_) => 42)
    expect(result).toBe(1)
  })

  it('should throw an error if the array is empty', () => {
    const array: number[] = []
    expect(() => maxBy(array, (x) => x)).toThrowError(
      expect.objectContaining({
        name: 'NoSuchElementException',
      }),
    )
  })
})
