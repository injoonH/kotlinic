import { describe, expect, it } from 'vitest'
import { NotImplementedError } from './NotImplementedError.js'

function throwNotImplementedError() {
  throw new NotImplementedError()
}

describe('NotImplementedError', () => {
  it('should have a name NotImplementedError', () => {
    expect(throwNotImplementedError).toThrowError(
      expect.objectContaining({
        name: 'NotImplementedError',
      }),
    )
  })
})
