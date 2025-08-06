# firstNotNullOf

```ts
function firstNotNullOf<T, R>(
  array: readonly T[],
  transform: (value: T) => R | null
): R
```

Returns the first non-null value produced by `transform` function being applied to elements of this array in iteration
order, or throws `NoSuchElementException` if no non-null value was produced.

## Samples

```ts
import { firstNotNullOf } from 'kotlinic/collections'

const array = [null, null, 5, null, 11, 13]
const result = firstNotNullOf(array, (it) => it)

console.log(result) // 5
```
