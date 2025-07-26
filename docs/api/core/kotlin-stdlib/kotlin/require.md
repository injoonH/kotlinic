# require

```ts
function require(value: boolean): asserts value is true
```

Throws an `IllegalArgumentException` if the `value` is false.

```ts
function require(
  value: boolean,
  lazyMessage: () => string
): asserts value is true
```

Throws an `IllegalArgumentException` with the result of calling `lazyMessage` if the `value` is false.

## Samples

```ts
import { require } from 'kotlinic'

require(true)
require(false) // will fail with IllegalArgumentException
require(false, () => 'Lazy message') // will fail with IllegalArgumentException
```
