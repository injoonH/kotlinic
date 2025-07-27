# takeUnless

```ts
function takeUnless<T>(
  value: T,
  predicate: (value: T) => boolean
): T | null
```

Returns `value` if it does not satisfy the given `predicate` or `null`, if it does.

## Samples

```ts
import { takeUnless } from 'kotlinic'

function isEven(num: number): boolean {
  return num % 2 === 0
}

const result1 = takeUnless(42, isEven)
const result2 = takeUnless(59, isEven)

console.log(result1) // null
console.log(result2) // 59
```
