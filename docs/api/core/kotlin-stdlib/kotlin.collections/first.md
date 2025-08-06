# first

```ts
function first<T>(array: readonly T[]): T
```

Returns the first element, or throws `NoSuchElementException` if the array is empty.

## Samples

```ts
import { first } from 'kotlinic/collections'

const array = [2, 3, 5, 7, 11, 13]
const result = first(array)

console.log(result) // 2
```
