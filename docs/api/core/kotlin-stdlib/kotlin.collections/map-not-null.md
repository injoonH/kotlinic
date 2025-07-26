# mapNotNull

```ts
function mapNotNull<T, R>(
  array: readonly T[],
  transform: (value: T) => R | null
): R[]
```

Returns a list containing only the non-null results of applying the given `transform` function to each element in the
original array.

## Samples

```ts
import { mapNotNull } from 'kotlinic/collections'

const array = [1, 2, 3, 4, 5, 6]
const result = mapNotNull(array, (it) => it > 3 ? it * 2 : null)

console.log(result) // [8, 10, 12]
```
