import { describe, expect, it, vi } from 'vitest'
import { Result } from './Result.js'
import type { Throwable } from './Throwable.js'

describe('Result', () => {
  it('should create a successful result', () => {
    const data = 'Success'
    const result = Result.success(data)
    expect(result.isSuccess).toBe(true)
    expect(result.getOrNull()).toBe(data)
  })

  it('should return null for a failure result', () => {
    const error = new Error('Failure')
    const result = Result.failure(error)
    expect(result.isFailure).toBe(true)
    expect(result.getOrNull()).toBeNull()
  })

  it('should create a failure result', () => {
    const error = new Error('Failure')
    const result = Result.failure(error)
    expect(result.isFailure).toBe(true)
    expect(result.exceptionOrNull()).toBe(error)
  })

  it('should return null for a successful result', () => {
    const data = 'Success'
    const result = Result.success(data)
    expect(result.isSuccess).toBe(true)
    expect(result.exceptionOrNull()).toBeNull()
  })

  it('should get value or throw exception', () => {
    const successResult = Result.success('Success value')
    expect(successResult.getOrThrow()).toBe('Success value')

    const failureResult = Result.failure(new Error('Failure message'))
    expect(() => failureResult.getOrThrow()).toThrowError('Failure message')
  })

  it('should get value or execute onFailure', () => {
    const successResult = Result.success('Success value')
    const onFailure = vi.fn((exception: Throwable) => String(exception))

    expect(successResult.getOrElse(onFailure)).toBe('Success value')
    expect(onFailure).not.toHaveBeenCalled()

    const failureResult = Result.failure(new Error('Failure message'))
    expect(failureResult.getOrElse(onFailure)).toBe('Error: Failure message')
    expect(onFailure).toHaveBeenCalledTimes(1)
  })

  it('should get value or default value', () => {
    const successResult = Result.success('Success value')
    expect(successResult.getOrDefault('Default value')).toBe('Success value')

    const failureResult = Result.failure(new Error('Failure message'))
    expect(failureResult.getOrDefault('Default value')).toBe('Default value')
  })

  it('should fold success case', () => {
    const successResult = Result.success('Success value')
    const onSuccess = vi.fn((value: string) => `Processed: ${value}`)
    const onFailure = vi.fn((exception: Throwable) => `Caught: ${exception}`)

    expect(successResult.fold(onSuccess, onFailure)).toBe('Processed: Success value')
    expect(onSuccess).toHaveBeenCalledWith('Success value')
    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(onFailure).not.toHaveBeenCalled()
  })

  it('should fold failure case', () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const onSuccess = vi.fn((value: string) => `Processed: ${value}`)
    const onFailure = vi.fn((exception: Throwable) => `Caught: ${exception}`)

    expect(failureResult.fold(onSuccess, onFailure)).toBe('Caught: Error: Failure message')
    expect(onSuccess).not.toHaveBeenCalled()
    expect(onFailure).toHaveBeenCalledWith(error)
    expect(onFailure).toHaveBeenCalledTimes(1)
  })

  it('should map success value', () => {
    const successResult = Result.success('Success value')
    const mappedResult = successResult.map((value) => `Mapped: ${value}`)

    expect(mappedResult.isSuccess).toBe(true)
    expect(mappedResult.getOrNull()).toBe('Mapped: Success value')
  })

  it('should map failure value', () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const mappedResult = failureResult.map((value) => `Mapped: ${value}`)

    expect(mappedResult.isFailure).toBe(true)
    expect(mappedResult.exceptionOrNull()).toBe(error)
  })

  it('should throw an error when transform throws an exception', () => {
    const successResult = Result.success('Success value')
    const error = new Error('Mapping error')
    const transform = (_: Throwable) => {
      throw error
    }

    expect(() => successResult.map(transform)).toThrowError(error)
  })

  it('should map success value asynchronously', async () => {
    const successResult = Result.success('Success value')
    const mappedResult = await successResult.map((value) => Promise.resolve(`Mapped: ${value}`))

    expect(mappedResult.isSuccess).toBe(true)
    expect(mappedResult.getOrNull()).toBe('Mapped: Success value')
  })

  it('should map failure value asynchronously', async () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const mappedResult = await failureResult.map((value) => Promise.resolve(`Mapped: ${value}`))

    expect(mappedResult.isFailure).toBe(true)
    expect(mappedResult.exceptionOrNull()).toBe(error)
  })

  it('should throw an error asynchronously when transform throws an exception', async () => {
    const successResult = Result.success('Success value')
    const error = new Error('Mapping error')
    const transform = (_: Throwable) => Promise.reject(error)

    await expect(successResult.map(transform)).rejects.toThrowError(error)
  })

  it('should map value to success when transform succeeds', () => {
    const successResult = Result.success('Success value')
    const mappedResult = successResult.mapCatching((value) => `Mapped: ${value}`)

    expect(mappedResult.isSuccess).toBe(true)
    expect(mappedResult.getOrNull()).toBe('Mapped: Success value')
  })

  it('should return failure when the original result is failure', () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const mappedResult = failureResult.mapCatching((value) => `Mapped: ${value}`)

    expect(mappedResult.isFailure).toBe(true)
    expect(mappedResult.exceptionOrNull()).toBe(error)
  })

  it('should return failure when transform fails', () => {
    const successResult = Result.success('Success value')
    const error = new Error('Mapping error')
    const mappedResult = successResult.mapCatching((_) => {
      throw error
    })

    expect(mappedResult.isFailure).toBe(true)
    expect(mappedResult.exceptionOrNull()).toBe(error)
  })

  it('should map value to success asynchronously when transform succeeds', async () => {
    const successResult = Result.success('Success value')
    const mappedResult = await successResult.mapCatching((value) => Promise.resolve(`Mapped: ${value}`))

    expect(mappedResult.isSuccess).toBe(true)
    expect(mappedResult.getOrNull()).toBe('Mapped: Success value')
  })

  it('should return failure asynchronously when the original result is failure', async () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const mappedResult = await failureResult.mapCatching((value) => Promise.resolve(`Mapped: ${value}`))

    expect(mappedResult.isFailure).toBe(true)
    expect(mappedResult.exceptionOrNull()).toBe(error)
  })

  it('should return failure asynchronously when transform fails', async () => {
    const successResult = Result.success('Success value')
    const error = new Error('Mapping error')
    const mappedResult = await successResult.mapCatching((_) => Promise.reject(error))

    expect(mappedResult.isFailure).toBe(true)
    expect(mappedResult.exceptionOrNull()).toBe(error)
  })

  it('should return the same object for success', () => {
    const successResult = Result.success('Success value')
    const transform = vi.fn((exception: Throwable) => `Recovered: ${exception}`)
    const recoveredResult = successResult.recover(transform)

    expect(recoveredResult).toBe(successResult)
    expect(transform).not.toHaveBeenCalled()
  })

  it('should recover from failure', () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const transform = vi.fn((exception: Throwable) => `Recovered: ${exception}`)
    const recoveredResult = failureResult.recover(transform)

    expect(recoveredResult.isSuccess).toBe(true)
    expect(recoveredResult.getOrNull()).toBe('Recovered: Error: Failure message')
    expect(transform).toHaveBeenCalledWith(error)
  })

  it('should throw an error when an exception is thrown during recovering', () => {
    const failureResult = Result.failure<string>(new Error('Failure message'))
    const transform = (_: Throwable) => {
      throw new Error('Recovery error')
    }

    expect(() => failureResult.recover(transform)).toThrowError('Recovery error')
  })

  it('should return the same object for success asynchronously', async () => {
    const successResult = Result.success('Success value')
    const transform = vi.fn((exception: Throwable) => Promise.resolve(`Recovered: ${exception}`))
    const recoveredResult = await successResult.recover(transform)

    expect(recoveredResult).toBe(successResult)
    expect(transform).not.toHaveBeenCalled()
  })

  it('should recover from failure asynchronously', async () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const transform = vi.fn((exception: Throwable) => Promise.resolve(`Recovered: ${exception}`))
    const recoveredResult = await failureResult.recover(transform)

    expect(recoveredResult.isSuccess).toBe(true)
    expect(recoveredResult.getOrNull()).toBe('Recovered: Error: Failure message')
    expect(transform).toHaveBeenCalledWith(error)
  })

  it('should throw an error asynchronously when an exception is thrown during recovering', async () => {
    const failureResult = Result.failure<string>(new Error('Failure message'))
    const transform = (_: Throwable) => Promise.reject(new Error('Recovery error'))

    await expect(failureResult.recover(transform)).rejects.toThrowError('Recovery error')
  })

  it('should return new success result from recoverCatching for success', () => {
    const successResult = Result.success('Success value')
    const transform = vi.fn((exception: Throwable) => `Recovered: ${exception}`)
    const recoveredResult = successResult.recoverCatching(transform)

    expect(recoveredResult).not.toBe(successResult)
    expect(recoveredResult).toStrictEqual(successResult)
    expect(transform).not.toHaveBeenCalled()
  })

  it('should recoverCatching from failure', () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const transform = vi.fn((exception: Throwable) => `Recovered: ${exception}`)
    const recoveredResult = failureResult.recoverCatching(transform)

    expect(recoveredResult.isSuccess).toBe(true)
    expect(recoveredResult.getOrNull()).toBe('Recovered: Error: Failure message')
    expect(transform).toHaveBeenCalledWith(error)
  })

  it('should return failure when an exception is thrown during recovering', () => {
    const failureResult = Result.failure<string>(new Error('Failure message'))
    const recoveryError = new Error('Recovery error')
    const transform = vi.fn((_: Throwable) => {
      throw recoveryError
    })
    const recoveredResult = failureResult.recoverCatching(transform)

    expect(recoveredResult.isFailure).toBe(true)
    expect(recoveredResult.exceptionOrNull()).toBe(recoveryError)
  })

  it('should return new success result from recoverCatching asynchronously for success', async () => {
    const successResult = Result.success('Success value')
    const transform = vi.fn((exception: Throwable) => Promise.resolve(`Recovered: ${exception}`))
    const recoveredResult = await successResult.recoverCatching(transform)

    expect(recoveredResult).not.toBe(successResult)
    expect(recoveredResult).toStrictEqual(successResult)
    expect(transform).not.toHaveBeenCalled()
  })

  it('should recoverCatching from failure asynchronously', async () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const transform = vi.fn((exception: Throwable) => Promise.resolve(`Recovered: ${exception}`))
    const recoveredResult = await failureResult.recoverCatching(transform)

    expect(recoveredResult.isSuccess).toBe(true)
    expect(recoveredResult.getOrNull()).toBe('Recovered: Error: Failure message')
    expect(transform).toHaveBeenCalledWith(error)
  })

  it('should return failure asynchronously when an exception is thrown during recovering', async () => {
    const failureResult = Result.failure<string>(new Error('Failure message'))
    const recoveryError = new Error('Recovery error')
    const transform = vi.fn((_: Throwable) => Promise.reject(recoveryError))
    const recoveredResult = await failureResult.recoverCatching(transform)

    expect(recoveredResult.isFailure).toBe(true)
    expect(recoveredResult.exceptionOrNull()).toBe(recoveryError)
  })

  it('should perform an action for failure', () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const action = vi.fn(() => {})

    const result = failureResult.onFailure(action)

    expect(result).toBe(failureResult)
    expect(action).toHaveBeenCalledWith(error)
    expect(action).toHaveBeenCalledTimes(1)
  })

  it('should not perform an action for success', () => {
    const successResult = Result.success('Success value')
    const action = vi.fn(() => {})

    const result = successResult.onFailure(action)

    expect(result).toBe(successResult)
    expect(action).not.toHaveBeenCalled()
  })

  it('should perform an action for success', () => {
    const value = 'Success value'
    const successResult = Result.success(value)
    const action = vi.fn(() => {})

    const result = successResult.onSuccess(action)

    expect(result).toBe(successResult)
    expect(action).toHaveBeenCalledWith(value)
    expect(action).toHaveBeenCalledTimes(1)
  })

  it('should not perform an action for failure', () => {
    const error = new Error('Failure message')
    const failureResult = Result.failure<string>(error)
    const action = vi.fn(() => {})

    const result = failureResult.onSuccess(action)

    expect(result).toBe(failureResult)
    expect(action).not.toHaveBeenCalled()
  })

  it('should convert to string correctly', () => {
    const successResult = Result.success('Success')
    const failureResult = Result.failure(new Error('Failure'))

    expect(successResult.toString()).toBe('Success(Success)')
    expect(failureResult.toString()).toBe('Failure(Error: Failure)')
  })
})
