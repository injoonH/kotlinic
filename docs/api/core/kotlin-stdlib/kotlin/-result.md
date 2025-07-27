# Result

```ts
class Result<T>
```

A discriminated union that encapsulates a successful outcome with a value of type `T` or a failure with an arbitrary
`Throwable` exception.

## Properties

### isFailure

```ts
isFailure: boolean
```

Returns `true` if this instance represents a failed outcome. In this case `isSuccess` returns `false`.

### isSuccess

```ts
isSuccess: boolean
```

Returns `true` if this instance represents a successful outcome. In this case `isFailure` returns `false`.

## Methods

### exceptionOrNull

```ts
exceptionOrNull(): Throwable | null
```

Returns the encapsulated `Throwable` exception if this instance represents failure or `null` if it is success.

### failure

```ts
static failure<T>(exception: Throwable): Result<T>
```

Returns an instance that encapsulates the given `Throwable` as failure.

### fold

```ts
fold<R>(
  onSuccess: (value: T) => R,
  onFailure: (exception: Throwable) => R
): R
```

Returns the result of `onSuccess` for the encapsulated value if this instance represents success or the result of
`onFailure` function for the encapsulated `Throwable` exception if it is failure.

Note, that this function rethrows any `Throwable` exception thrown by `onSuccess` or by `onFailure` function.

### getOrDefault

```ts
getOrDefault(defaultValue: T): T
```

Returns the encapsulated value if this instance represents success or the `defaultValue` if it is failure.

### getOrElse

```ts
getOrElse(onFailure: (exception: Throwable) => T): T
```

Returns the encapsulated value if this instance represents success or the result of `onFailure` function for the
encapsulated `Throwable` exception if it is failure.

Note, that this function rethrows any `Throwable` exception thrown by `onFailure` function.

### getOrNull

```ts
getOrNull(): T | null
```

Returns the encapsulated value if this instance represents success or `null` if it is failure.

### getOrThrow

```ts
getOrThrow(): T
```

Returns the encapsulated value if this instance represents success or throws the encapsulated `Throwable` exception if
it is failure.

### map

```ts
map<R>(transform: (value: T) => R): Result<R>
```

Returns the encapsulated result of the given `transform` function applied to the encapsulated value if this instance
represents success or the original encapsulated `Throwable` exception if it is failure.

Note, that this function rethrows any `Throwable` exception thrown by `transform` function. See `mapCatching` for an
alternative that encapsulates exceptions.

### mapCatching

```ts
mapCatching<R>(transform: (value: T) => R): Result<R>
```

Returns the encapsulated result of the given `transform` function applied to the encapsulated value if this instance
represents success or the original encapsulated `Throwable` exception if it is failure.

This function catches any `Throwable` exception thrown by `transform` function and encapsulates it as a failure. See
`map` for an alternative that rethrows exceptions from `transform` function.

### onFailure

```ts
onFailure(action: (exception: Throwable) => void): Result<T>
```

Performs the given `action` on the encapsulated `Throwable` exception if this instance represents failure. Returns the
original `Result` unchanged.

### onSuccess

```ts
onSuccess(action: (value: T) => void): Result<T>
```

Performs the given `action` on the encapsulated value if this instance represents success. Returns the original `Result`
unchanged.

### recover

```ts
recover(transform: (exception: Throwable) => T): Result<T>
```

Returns the encapsulated result of the given `transform` function applied to the encapsulated `Throwable` exception if
this instance represents failure or the original encapsulated value if it is success.

Note, that this function rethrows any `Throwable` exception thrown by `transform` function. See `recoverCatching` for an
alternative that encapsulates exceptions.

### recoverCatching

```ts
recoverCatching(transform: (exception: Throwable) => T): Result<T>
```

Returns the encapsulated result of the given `transform` function applied to the encapsulated `Throwable` exception if
this instance represents failure or the original encapsulated value if it is success.

This function catches any `Throwable` exception thrown by `transform` function and encapsulates it as a failure. See
`recover` for an alternative that rethrows exceptions.

### success

```ts
static success<T>(value: T): Result<T>
```

Returns an instance that encapsulates the given `value` as a successful value.

### toString

```ts
toString(): string
```

Returns a string `Success(v)` if this instance represents success where `v` is a string representation of the value or a
string `Failure(x)` if it is failure where `x` is a string representation of the exception.
