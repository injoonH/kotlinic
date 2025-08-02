# zip

```ts
function zip<T, R>(
  array: T[],
  other: R[]
): Pair<T, R>[]
```

Returns a list of pairs built from the elements of the `array` and the `other` array with the same index.
The returned list has the length of the shortest collection.

```ts
export function zip<T, R, V>(
  array: T[],
  other: R[],
  transform: (a: T, b: R) => V
): V[]
```

Returns a list of values built from the elements of the `array` and the `other` array with the same index
using the provided `transform` function applied to each pair of elements.
The returned list has the length of the shortest collection.

## Samples

```ts
import { zip } from 'kotlinic/collections'

const listA = ['a', 'b', 'c']
const listB = [1, 2, 3, 4]

const zipped = zip(listA, listB)
console.log(zipped.join(', ')) // (a, 1), (b, 2), (c, 3)

const transformed = zip(listA, listB, (a, b) => `${a}${b}`)
console.log(transformed) // ['a1', 'b2', 'c3']
```
