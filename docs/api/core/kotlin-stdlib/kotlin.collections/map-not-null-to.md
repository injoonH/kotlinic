# mapNotNullTo

```ts
function mapNotNullTo<T, R>(
  array: readonly T[],
  destination: R[],
  transform: (value: T) => R | null
): R[]
```

Applies the given `transform` function to each element in the original array and appends only the non-null results to
the given `destination`.

## Samples

```ts
import { mapNotNullTo } from 'kotlinic/collections'

const array = [1, 2, 3, 4, 5, 6]
const destination = ['foo', 'bar']
const result = mapNotNullTo(array, destination, (it) => it > 3 ? it.toString() : null)

console.log(result) // ['foo', 'bar', '4', '5', '6']
```
