import { describe, expect, it } from 'vitest'
import { runCatching } from './runCatching.js'

describe('runCatching', () => {
  it('should return a successful result when the block executes without error', () => {
    const result = runCatching(() => 42)
    expect(result.isSuccess).toBe(true)
    expect(result.getOrNull()).toBe(42)
  })

  it('should return a failure result when the block throws an error', () => {
    const error = new Error('Test error')
    const result = runCatching(() => {
      throw error
    })
    expect(result.isFailure).toBe(true)
    expect(result.exceptionOrNull()).toBe(error)
  })
})
