# repeat

```ts
function repeat(
  times: number,
  action: (index: number) => void
): void
```

Executes the given function `action` specified number of times.

A zero-based index of current iteration is passed as a parameter to the `action` function.

If the `times` parameter is negative or equal to zero, the `action` function is not invoked.

## Samples

```ts
import { repeat } from 'kotlinic'

// greets with an index
repeat(3, (index) => {
  console.log(`Hello with index ${index}`)
})
```
