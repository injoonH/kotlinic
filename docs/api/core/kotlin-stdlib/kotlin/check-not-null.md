# checkNotNull

```ts
function checkNotNull<T>(value: T): asserts value is Exclude<T, null>
```

Throws an `IllegalStateException` if the `value` is null.

```ts
function checkNotNull<T>(
  value: T,
  lazyMessage: () => string
): asserts value is Exclude<T, null>
```

Throws an `IllegalStateException` with the result of calling `lazyMessage` if the `value` is null.

## Samples

```ts
import { checkNotNull } from 'kotlinic'

checkNotNull(42)
checkNotNull('foo')
checkNotNull(null) // will fail with IllegalStateException
```
