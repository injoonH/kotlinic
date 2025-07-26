import { assertType, describe, it } from 'vitest'
import { requireNotNull } from './requireNotNull.js'

describe('requireNotNull', () => {
  it('should narrow type to non-nullable after check', () => {
    const array = [0, '', false, null, undefined]
    const value = array[0]
    requireNotNull(value)
    assertType<string | number | boolean | undefined>(value)
  })
})
