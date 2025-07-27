# runCatching

```ts
function runCatching<T>(block: () => T): Result<T>
```

Calls the specified function `block` and returns its encapsulated result if invocation was successful, catching any
`Throwable` exception that was thrown from the `block` function execution and encapsulating it as a failure.

## Samples

```ts
import { runCatching } from 'kotlinic'

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero')
  }
  return a / b
}

const result = runCatching(() => divide(42, 0))
  .onSuccess((val) => {
    console.log('Division succeeded')
  })
  .onFailure((err) => {
    console.log('Division failed') // This will be executed
  })

console.log(result.toString()) // Failure(Error: Division by zero)
```
