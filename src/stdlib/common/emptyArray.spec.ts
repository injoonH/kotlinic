import { describe, expect, it } from 'vitest'
import { emptyArray } from './emptyArray.js'

describe('emptyArray', () => {
  it('should return an empty array', () => {
    const result = emptyArray()
    expect(result.length).toBe(0)
  })
})
