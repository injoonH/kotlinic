# firstNotNullOfOrNull

```ts
function firstNotNullOfOrNull<T, R>(
  array: readonly T[],
  transform: (value: T) => R | null
): R | null
```

Returns the first non-null value produced by `transform` function being applied to elements of this array in iteration
order, or `null` if no non-null value was produced.

## Samples

```ts
import { firstNotNullOfOrNull } from 'kotlinic/collections'

const array = [2, 3, 5, 7, 11, 13]
const result = firstNotNullOfOrNull(array, (_) => null)

console.log(result) // null
```
