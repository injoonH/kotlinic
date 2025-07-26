import { describe, expect, it } from 'vitest'
import { singleOrNull } from './singleOrNull.js'

describe('singleOrNull', () => {
  it('should return the single element from an array with one element', () => {
    const result = singleOrNull([42])
    expect(result).toBe(42)
  })

  it('should return null for an empty array', () => {
    const result = singleOrNull([])
    expect(result).toBeNull()
  })

  it('should return null for an array with more than one element', () => {
    const result = singleOrNull([1, 2])
    expect(result).toBeNull()
  })
})
