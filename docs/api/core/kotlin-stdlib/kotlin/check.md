# check

```ts
function check(value: boolean): asserts value is true
```

Throws an `IllegalStateException` if the `value` is false.

```ts
function check(
  value: boolean,
  lazyMessage: () => string
): asserts value is true
```

Throws an `IllegalStateException` with the result of calling `lazyMessage` if the `value` is false.

## Samples

```ts
import { check } from 'kotlinic'

check(true)
check(false) // will fail with IllegalStateException
check(false, () => 'Lazy message') // will fail with IllegalStateException
```
