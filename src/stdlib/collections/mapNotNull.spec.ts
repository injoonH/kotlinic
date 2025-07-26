import { describe, expect, it } from 'vitest'
import { mapNotNull } from './mapNotNull.js'

describe('mapNotNull', () => {
  it('should map and filter out null values', () => {
    const input = [1, 2, 3, 4, 5]
    const result = mapNotNull(input, (x) => (x % 2 === 0 ? x * 2 : null))
    expect(result).toEqual([4, 8])
  })

  it('should return an empty array for an empty input', () => {
    const input: number[] = []
    const result = mapNotNull(input, (x) => x * 2)
    expect(result).toEqual([])
  })

  it('should handle all null results', () => {
    const input = [1, 3, 5]
    const result = mapNotNull(input, (x) => (x % 2 === 0 ? x * 2 : null))
    expect(result).toEqual([])
  })

  it('should handle mixed types', () => {
    const input = [1, 'two', null, 3]
    const result = mapNotNull(input, (x) => (typeof x === 'number' ? x * 2 : null))
    expect(result).toEqual([2, 6])
  })
})
