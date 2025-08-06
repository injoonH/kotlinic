# firstOrNull

```ts
function firstOrNull<T>(array: readonly T[]): T | null
```

Returns the first element, or `null` if the array is empty.

## Samples

```ts
import { firstOrNull } from 'kotlinic/collections'

const array = []
const result = firstOrNull(array)

console.log(result) // null
```
