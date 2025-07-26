# maxBy

```ts
function maxBy<T, R>(
  array: readonly T[],
  selector: (value: T) => R
): T
```

Returns the first element yielding the largest value of the given `selector` function.

If there are multiple equal maximal values returned by the `selector` function, this function returns the first of
elements corresponding to these values.

Note that the function `selector` is not invoked when the array contains zero or one elements because in these cases it
is clear which element to return without invoking the `selector`. Therefore, it's recommended to avoid relying on side
effects being performed by the `selector` function on each element.

## Samples

```ts
import { maxBy } from 'kotlinic/collections'

const strings = ['abcd', 'abc', 'ab', 'de', 'abcde']
const longestString = maxBy(strings, (it) => it.length)

console.log(longestString) // abcde
```
