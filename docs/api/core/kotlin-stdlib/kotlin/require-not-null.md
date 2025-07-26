# requireNotNull

```ts
function requireNotNull<T>(value: T): asserts value is Exclude<T, null>
```

Throws an `IllegalArgumentException` if the `value` is null.

```ts
function requireNotNull<T>(
  value: T,
  lazyMessage: () => string
): asserts value is Exclude<T, null>
```

Throws an `IllegalArgumentException` with the result of calling `lazyMessage` if the `value` is null.

## Samples

```ts
import { requireNotNull } from 'kotlinic'

requireNotNull(42)
requireNotNull('foo')
requireNotNull(null) // will fail with IllegalStateException
```
