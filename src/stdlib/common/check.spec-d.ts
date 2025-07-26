import { assertType, describe, it } from 'vitest'
import { check } from './check.js'

describe('check', () => {
  it('should narrow type to true after check', () => {
    const value: boolean = true
    check(value)
    assertType<true>(value)
  })
})
