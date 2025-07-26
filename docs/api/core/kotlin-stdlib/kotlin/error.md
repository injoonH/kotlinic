# error

```ts
function error(message: string): never
```

Throws an `IllegalStateException` with the given `message`.

## Samples

```ts
import { error } from 'kotlinic'

const name = null
const nonNullName = name ?? error('Name is missing') // will fail with IllegalStateException
```
