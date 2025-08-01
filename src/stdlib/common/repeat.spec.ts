import { describe, expect, it } from 'vitest'
import { repeat } from './repeat.js'

describe('repeat', () => {
  it('should repeat a value n times', () => {
    const result: number[] = []
    repeat(3, (i) => result.push(i))
    expect(result).toEqual([0, 1, 2])
  })

  it('should handle negative counts', () => {
    const result: number[] = []
    repeat(-1, (i) => result.push(i))
    expect(result).toEqual([])
  })

  it('should handle zero count', () => {
    const result: number[] = []
    repeat(0, (i) => result.push(i))
    expect(result).toEqual([])
  })
})
