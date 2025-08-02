import { describe, expect, it } from 'vitest'
import { Pair } from '../common'
import { zipWithNext } from './zipWithNext.js'

describe('zipWithNext', () => {
  it('should return an empty array for an empty input', () => {
    expect(zipWithNext([])).toEqual([])
  })

  it('should return an empty array for a single element input', () => {
    expect(zipWithNext([1])).toEqual([])
  })

  it('should return pairs for multiple elements', () => {
    expect(zipWithNext([1, 2, 3, 4])).toEqual([new Pair(1, 2), new Pair(2, 3), new Pair(3, 4)])
  })

  it('should apply the transform function to pairs', () => {
    const result = zipWithNext([1, 2, 3, 4], (a, b) => a + b)
    expect(result).toEqual([3, 5, 7])
  })
})
