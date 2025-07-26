# single

```ts
function single<T>(array: readonly T[]): T
```

Returns the single element, or throws an exception if the array is empty or has more than one element.

## Samples

```ts
import { single } from 'kotlinic/collections'

const value = single([42])
console.log(value) // 42
```
