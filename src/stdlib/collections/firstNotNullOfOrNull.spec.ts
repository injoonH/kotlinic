import { describe, expect, it } from 'vitest'
import { firstNotNullOfOrNull } from './firstNotNullOfOrNull.js'

describe('firstNotNullOfOrNull', () => {
  it('should return the first non-null value', () => {
    const array = [null, 1, null, 2]
    const result = firstNotNullOfOrNull(array, (it) => it)
    expect(result).toBe(1)
  })

  it('should return null if all values are null', () => {
    const array = [null, null, null]
    const result = firstNotNullOfOrNull(array, (it) => it)
    expect(result).toBeNull()
  })

  it('should return null for an empty array', () => {
    const array: number[] = []
    const result = firstNotNullOfOrNull(array, (it) => it)
    expect(result).toBeNull()
  })
})
