import { describe, expect, it } from 'vitest'
import { Triple } from './Triple.js'

describe('Triple', () => {
  it('should create a triple with given values', () => {
    const triple = new Triple(1, 'a', true)
    expect(triple.first).toBe(1)
    expect(triple.second).toBe('a')
    expect(triple.third).toBe(true)
  })

  it('should convert to list', () => {
    const triple = new Triple(1, 'a', true)
    expect(triple.toList()).toEqual([1, 'a', true])
  })

  it('should return string representation of the triple', () => {
    const triple = new Triple(1, 'a', true)
    expect(triple.toString()).toBe('(1, a, true)')
  })
})
