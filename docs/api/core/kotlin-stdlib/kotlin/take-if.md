# takeIf

```ts
function takeIf<T>(
  value: T,
  predicate: (value: T) => boolean
): T | null
```

Returns `value` if it satisfies the given `predicate` or `null`, if it doesn't.

## Samples

```ts
import { takeIf } from 'kotlinic'

function isEven(num: number): boolean {
  return num % 2 === 0
}

const result1 = takeIf(42, isEven)
const result2 = takeIf(59, isEven)

console.log(result1) // 42
console.log(result2) // null
```
