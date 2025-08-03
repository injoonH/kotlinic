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

  it('should return a successful result for async functions that resolve', async () => {
    const result = await runCatching(async () => 42)
    expect(result.isSuccess).toBe(true)
    expect(result.getOrNull()).toBe(42)
  })

  it('should return a failure result for async functions that throw', async () => {
    const error = new Error('Async test error')
    const result = await runCatching(async () => {
      throw error
    })
    expect(result.isFailure).toBe(true)
    expect(result.exceptionOrNull()).toBe(error)
  })
})
