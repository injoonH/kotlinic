import { describe, expect, it } from 'vitest'
import { takeIf } from './takeIf.js'

describe('takeIf', () => {
  it('should return the value if the predicate is true', () => {
    const result = takeIf(42, (it) => it > 0)
    expect(result).toBe(42)
  })

  it('should return null if the predicate is false', () => {
    const result = takeIf(42, (it) => it < 0)
    expect(result).toBeNull()
  })
})
