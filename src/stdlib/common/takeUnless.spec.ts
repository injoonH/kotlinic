import { describe, expect, it } from 'vitest'
import { takeUnless } from './takeUnless.js'

describe('takeUnless', () => {
  it('should return the value if the predicate is false', () => {
    const result = takeUnless(42, (it) => it < 0)
    expect(result).toBe(42)
  })

  it('should return null if the predicate is true', () => {
    const result = takeUnless(42, (it) => it > 0)
    expect(result).toBeNull()
  })
})
