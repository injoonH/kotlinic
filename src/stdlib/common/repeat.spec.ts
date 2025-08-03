import { describe, expect, it, vi } from 'vitest'
import { repeat } from './repeat.js'

describe('repeat', () => {
  it('should repeat a value n times', () => {
    const action = vi.fn(() => {})
    repeat(3, action)
    expect(action).toHaveBeenCalledTimes(3)
  })

  it('should handle zero count', () => {
    const action = vi.fn(() => {})
    repeat(0, action)
    expect(action).not.toHaveBeenCalled()
  })

  it('should handle negative counts', () => {
    const action = vi.fn(() => {})
    repeat(-1, action)
    expect(action).not.toHaveBeenCalled()
  })
})
