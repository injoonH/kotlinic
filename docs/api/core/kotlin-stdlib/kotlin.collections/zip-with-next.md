# zipWithNext

```ts
function zipWithNext<T>(array: T[]): Pair<T, T>[]
```

Returns a list of pairs of each two adjacent elements in this collection.

The returned list is empty if this collection contains less than two elements.

```ts
function zipWithNext<T, R>(
  array: T[],
  transform: (a: T, b: T) => R
): R[]
```

Returns a list containing the results of applying the given `transform` function to each pair of two adjacent elements
in this collection.

The returned list is empty if this collection contains less than two elements.

## Samples

```ts
import { zipWithNext } from 'kotlinic/collections'

const letters = ['a', 'b', 'c', 'd', 'e']
const pairs = zipWithNext(letters)

console.log(pairs.join(', ')) // (a, b), (b, c), (c, d), (d, e)

const values = [1, 4, 9, 16, 25, 36]
const deltas = zipWithNext(values, (a, b) => b - a)

console.log(deltas) // [3, 5, 7, 9, 11]
```
