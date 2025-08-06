import { describe, expect, it } from 'vitest'
import { firstNotNullOf } from './firstNotNullOf.js'

describe('firstNotNullOf', () => {
  it('should return the first non-null value produced by transform', () => {
    const input = [1, 2, 3, null, 5]
    const result = firstNotNullOf(input, (it) => (it === null ? 42 : null))
    expect(result).toBe(42)
  })

  it('should throw NoSuchElementException if no non-null value is produced', () => {
    const input = [null, null, null]
    expect(() => firstNotNullOf(input, (it) => it)).toThrowError(
      'No element of the array was transformed to a non-null value.',
    )
  })
})
