# singleOrNull

```ts
function singleOrNull<T>(array: readonly T[]): T | null
```

Returns single element, or `null` if the array is empty or has more than one element.

## Samples

```ts
import { singleOrNull } from 'kotlinic/collections'

const value1 = singleOrNull([1, 2, 3])
console.log(value1) // null

const value2 = singleOrNull([42])
console.log(value2) // 42
```
