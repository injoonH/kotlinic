import { describe, expect, it } from 'vitest'
import { mapNotNullTo } from './mapNotNullTo.js'

describe('mapNotNullTo', () => {
  it('should map and filter out null values', () => {
    const source = [1, 2, 3, 4, 5]
    const destination: number[] = []
    const result = mapNotNullTo(source, destination, (x) => (x % 2 === 0 ? x * 2 : null))

    expect(result).toEqual([4, 8])
    expect(destination).toEqual([4, 8])
  })

  it('should return an empty array when all results are null', () => {
    const source = [1, 3, 5]
    const destination: number[] = []
    const result = mapNotNullTo(source, destination, (_) => null)

    expect(result).toEqual([])
    expect(destination).toEqual([])
  })

  it('should handle an empty source array', () => {
    const source: number[] = []
    const destination: number[] = []
    const result = mapNotNullTo(source, destination, (x) => x * 2)

    expect(result).toEqual([])
    expect(destination).toEqual([])
  })

  it('should append mapped non-null values to a pre-filled destination array', () => {
    const source = [1, 2, 3, 4, 5]
    const destination = [10, 20]
    const result = mapNotNullTo(source, destination, (x) => (x % 2 === 0 ? x * 2 : null))

    expect(result).toEqual([10, 20, 4, 8])
    expect(destination).toEqual([10, 20, 4, 8])
  })
})
