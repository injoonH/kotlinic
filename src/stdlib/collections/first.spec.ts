import { describe, expect, it } from 'vitest'
import { first } from './first.js'

describe('first', () => {
  it('should return the first element of a non-empty array', () => {
    const input = [1, 2, 3, 4, 5]
    const result = first(input)
    expect(result).toBe(1)
  })

  it('should throw NoSuchElementException for an empty array', () => {
    const input: number[] = []
    expect(() => first(input)).toThrowError('Array is empty.')
  })
})
