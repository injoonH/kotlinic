import { describe, expect, it } from 'vitest'
import { firstOrNull } from './firstOrNull.js'

describe('firstOrNull', () => {
  it('should return the first element', () => {
    const array = [1, 2, 3]
    const result = firstOrNull(array)
    expect(result).toBe(1)
  })

  it('should return null for an empty array', () => {
    const array: number[] = []
    const result = firstOrNull(array)
    expect(result).toBeNull()
  })
})
