import type { MaybePromise, NonPromise } from './Promise.js'
import type { Throwable } from './Throwable.js'

type Ok<T> = { ok: true; value: T }
type Err = { ok: false; exception: Throwable }

export class Result<T> {
  /**
   * Returns `true` if this instance represents a successful outcome.
   * In this case {@linkcode isFailure} returns `false`.
   */
  isSuccess: boolean

  /**
   * Returns `true` if this instance represents a failed outcome.
   * In this case {@linkcode isSuccess} returns `false`.
   */
  isFailure: boolean

  private constructor(private result: Ok<T> | Err) {
    this.isSuccess = result.ok
    this.isFailure = !result.ok
  }

  /**
   * Returns the encapsulated value if this instance represents [success]{@linkcode Result#isSuccess} or `null`
   * if it is [failure]{@linkcode Result#isFailure}.
   */
  getOrNull(): T | null {
    return this.result.ok ? this.result.value : null
  }

  /**
   * Returns the encapsulated {@linkcode Throwable} exception if this instance
   * represents [failure]{@linkcode Result#isFailure} or `null` if it is [success]{@linkcode Result#isSuccess}.
   */
  exceptionOrNull(): Throwable | null {
    return this.result.ok ? null : this.result.exception
  }

  /**
   * Returns the encapsulated value if this instance represents [success]{@linkcode Result#isSuccess}
   * or throws the encapsulated {@linkcode Throwable} exception if it is [failure]{@linkcode Result#isFailure}.
   */
  getOrThrow(): T {
    if (this.result.ok) {
      return this.result.value
    }
    throw this.result.exception
  }

  /**
   * Returns the encapsulated value if this instance represents [success]{@linkcode Result#isSuccess}
   * or the result of {@linkcode Result#onFailure} function for the encapsulated {@linkcode Throwable} exception
   * if it is [failure]{@linkcode Result#isFailure}.
   *
   * Note, that this function rethrows any {@linkcode Throwable} exception
   * thrown by {@linkcode Result#onFailure} function.
   */
  getOrElse(onFailure: (exception: Throwable) => T): T {
    return this.result.ok ? this.result.value : onFailure(this.result.exception)
  }

  /**
   * Returns the encapsulated value if this instance represents [success]{@linkcode Result#isSuccess}
   * or the {@linkcode defaultValue} if it is [failure]{@linkcode Result#isFailure}.
   */
  getOrDefault(defaultValue: T): T {
    return this.result.ok ? this.result.value : defaultValue
  }

  /**
   * Returns the result of {@linkcode onSuccess} for the encapsulated value
   * if this instance represents [success]{@linkcode Result#isSuccess}
   * or the result of {@linkcode onFailure} function for the encapsulated {@linkcode Throwable} exception
   * if it is [failure]{@linkcode Result#isFailure}.
   *
   * Note, that this function rethrows any {@linkcode Throwable} exception
   * thrown by {@linkcode onSuccess} or by {@linkcode onFailure} function.
   */
  fold<R>(onSuccess: (value: T) => R, onFailure: (exception: Throwable) => R): R {
    return this.result.ok ? onSuccess(this.result.value) : onFailure(this.result.exception)
  }

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to the encapsulated value
   * if this instance represents [success]{@linkcode Result#isSuccess}
   * or the original encapsulated {@linkcode Throwable} exception if it is [failure]{@linkcode Result#isFailure}.
   *
   * Note, that this function rethrows any {@linkcode Throwable} exception thrown by {@linkcode transform} function.
   * See {@linkcode Result#mapCatching} for an alternative that encapsulates exceptions.
   */
  map<R>(transform: (value: T) => NonPromise<R>): Result<R>

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to the encapsulated value
   * if this instance represents [success]{@linkcode Result#isSuccess}
   * or the original encapsulated {@linkcode Throwable} exception if it is [failure]{@linkcode Result#isFailure}.
   *
   * Note, that this function rethrows any {@linkcode Throwable} exception thrown by {@linkcode transform} function.
   * See {@linkcode Result#mapCatching} for an alternative that encapsulates exceptions.
   */
  map<R>(transform: (value: T) => Promise<R>): Promise<Result<R>>

  map<R>(transform: (value: T) => MaybePromise<R>): MaybePromise<Result<R>> {
    if (!this.result.ok) {
      return Result.failure(this.result.exception)
    }
    const value = transform(this.result.value)
    return value instanceof Promise ? value.then((it) => Result.success(it)) : Result.success(value)
  }

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to the encapsulated value
   * if this instance represents [success]{@linkcode Result#isSuccess}
   * or the original encapsulated {@linkcode Throwable} exception if it is [failure]{@linkcode Result#isFailure}.
   *
   * This function catches any {@linkcode Throwable} exception
   * thrown by {@linkcode transform} function and encapsulates it as a failure.
   * See {@linkcode Result#map} for an alternative that rethrows exceptions from `transform` function.
   */
  mapCatching<R>(transform: (value: T) => NonPromise<R>): Result<R>

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to the encapsulated value
   * if this instance represents [success]{@linkcode Result#isSuccess}
   * or the original encapsulated {@linkcode Throwable} exception if it is [failure]{@linkcode Result#isFailure}.
   *
   * This function catches any {@linkcode Throwable} exception
   * thrown by {@linkcode transform} function and encapsulates it as a failure.
   * See {@linkcode Result#map} for an alternative that rethrows exceptions from `transform` function.
   */
  mapCatching<R>(transform: (value: T) => Promise<R>): Promise<Result<R>>

  mapCatching<R>(transform: (value: T) => MaybePromise<R>): MaybePromise<Result<R>> {
    if (!this.result.ok) {
      return Result.failure(this.result.exception)
    }
    try {
      const value = transform(this.result.value)
      return value instanceof Promise
        ? value.then((it) => Result.success(it)).catch((it) => Result.failure(it))
        : Result.success(value)
    } catch (error) {
      return Result.failure(error)
    }
  }

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to
   * the encapsulated {@linkcode Throwable} exception if this instance represents [failure]{@linkcode Result#isFailure}
   * or the original encapsulated value if it is [success]{@linkcode Result#isSuccess}.
   *
   * Note, that this function rethrows any {@linkcode Throwable} exception thrown by {@linkcode transform} function.
   * See {@linkcode Result#recoverCatching} for an alternative that encapsulates exceptions.
   */
  recover(transform: (exception: Throwable) => T): Result<T>

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to
   * the encapsulated {@linkcode Throwable} exception if this instance represents [failure]{@linkcode Result#isFailure}
   * or the original encapsulated value if it is [success]{@linkcode Result#isSuccess}.
   *
   * Note, that this function rethrows any {@linkcode Throwable} exception thrown by {@linkcode transform} function.
   * See {@linkcode Result#recoverCatching} for an alternative that encapsulates exceptions.
   */
  recover(transform: (exception: Throwable) => Promise<T>): Promise<Result<T>>

  recover(transform: (exception: Throwable) => MaybePromise<T>): MaybePromise<Result<T>> {
    if (this.result.ok) {
      return this
    }
    const value = transform(this.result.exception)
    return value instanceof Promise ? value.then((it) => Result.success(it)) : Result.success(value)
  }

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to
   * the encapsulated {@linkcode Throwable} exception if this instance represents [failure]{@linkcode Result#isFailure}
   * or the original encapsulated value if it is [success]{@linkcode Result#isSuccess}.
   *
   * This function catches any {@linkcode Throwable} exception thrown by {@linkcode transform} function
   * and encapsulates it as a failure.
   * See {@linkcode Result#recover} for an alternative that rethrows exceptions.
   */
  recoverCatching(transform: (exception: Throwable) => T): Result<T>

  /**
   * Returns the encapsulated result of the given {@linkcode transform} function applied to
   * the encapsulated {@linkcode Throwable} exception if this instance represents [failure]{@linkcode Result#isFailure}
   * or the original encapsulated value if it is [success]{@linkcode Result#isSuccess}.
   *
   * This function catches any {@linkcode Throwable} exception thrown by {@linkcode transform} function
   * and encapsulates it as a failure.
   * See {@linkcode Result#recover} for an alternative that rethrows exceptions.
   */
  recoverCatching(transform: (exception: Throwable) => Promise<T>): Promise<Result<T>>

  recoverCatching(transform: (exception: Throwable) => MaybePromise<T>): MaybePromise<Result<T>> {
    if (this.result.ok) {
      return Result.success(this.result.value)
    }
    try {
      const value = transform(this.result.exception)
      return value instanceof Promise
        ? value.then((it) => Result.success(it)).catch((it) => Result.failure(it))
        : Result.success(value)
    } catch (error) {
      return Result.failure(error)
    }
  }

  /**
   * Performs the given {@linkcode action} on the encapsulated {@linkcode Throwable} exception
   * if this instance represents [failure]{@linkcode Result#isFailure}.
   * Returns the original `Result` unchanged.
   */
  onFailure(action: (exception: Throwable) => void): Result<T> {
    if (!this.result.ok) {
      action(this.result.exception)
    }
    return this
  }

  /**
   * Performs the given {@linkcode action} on the encapsulated value
   * if this instance represents [success]{@linkcode Result#isSuccess}.
   * Returns the original `Result` unchanged.
   */
  onSuccess(action: (value: T) => void): Result<T> {
    if (this.result.ok) {
      action(this.result.value)
    }
    return this
  }

  /**
   * Returns a string `Success(v)` if this instance represents [success]{@linkcode Result#isSuccess}
   * where `v` is a string representation of the value or a string `Failure(x)` if
   * it is [failure]{@linkcode Result#isFailure} where `x` is a string representation of the exception.
   */
  toString(): string {
    return this.result.ok ? `Success(${this.result.value})` : `Failure(${this.result.exception})`
  }

  /**
   * Returns an instance that encapsulates the given {@linkcode value} as successful value.
   */
  static success<T>(value: T): Result<T> {
    return new Result({ ok: true, value })
  }

  /**
   * Returns an instance that encapsulates the given {@linkcode Throwable} {@linkcode exception} as failure.
   */
  static failure<T>(exception: Throwable): Result<T> {
    return new Result({ ok: false, exception })
  }
}
