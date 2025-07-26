import { assertType, describe, it } from 'vitest'
import { require } from './require.js'

describe('require', () => {
  it('should narrow type to true after require', () => {
    const value: boolean = true
    require(value)
    assertType<true>(value)
  })
})
