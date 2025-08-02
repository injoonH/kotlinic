import { describe, expect, it } from 'vitest'
import { Pair } from '../common/tuples/Pair.js'
import { zip } from './zip.js'

describe('zip', () => {
  it('should return an empty array for two empty inputs', () => {
    expect(zip([], [])).toEqual([])
  })

  it('should return an empty array for one empty input', () => {
    expect(zip([1, 2, 3], [])).toEqual([])
    expect(zip([], [4, 5, 6])).toEqual([])
  })

  it('should zip two arrays of the same length', () => {
    const result = zip([1, 2, 3], ['a', 'b', 'c'])
    expect(result).toEqual([new Pair(1, 'a'), new Pair(2, 'b'), new Pair(3, 'c')])
  })

  it('should zip two arrays of different lengths', () => {
    expect(zip([1, 2], ['a', 'b', 'c'])).toEqual([new Pair(1, 'a'), new Pair(2, 'b')])
    expect(zip(['a', 'b', 'c'], [1, 2])).toEqual([new Pair('a', 1), new Pair('b', 2)])
  })

  it('should apply a transform function when provided', () => {
    const result = zip([1, 2], ['a', 'b'], (a, b) => `${a}${b}`)
    expect(result).toEqual(['1a', '2b'])
  })
})
