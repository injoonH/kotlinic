import { describe, expect, it } from 'vitest'
import { Pair } from './Pair.js'

describe('Pair', () => {
  it('should create a pair with given values', () => {
    const pair = new Pair(1, 'a')
    expect(pair.first).toBe(1)
    expect(pair.second).toBe('a')
  })

  it('should convert to list', () => {
    const pair = new Pair(1, 'a')
    expect(pair.toList()).toEqual([1, 'a'])
  })

  it('should return string representation of the pair', () => {
    const pair = new Pair(1, 'a')
    expect(pair.toString()).toBe('(1, a)')
  })
})
