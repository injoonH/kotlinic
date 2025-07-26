import { assertType, describe, it } from 'vitest'
import { checkNotNull } from './checkNotNull.js'

describe('checkNotNull', () => {
  it('should narrow type to non-nullable after check', () => {
    const array = [0, '', false, null, undefined]
    const value = array[0]
    checkNotNull(value)
    assertType<string | number | boolean | undefined>(value)
  })
})
