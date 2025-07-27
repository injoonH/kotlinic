# TODO

```ts
function TODO(): never
function TODO(reason: string): never
```

Always throws `NotImplementedError` stating that operation is not implemented.

## Samples

```ts
import { TODO } from 'kotlinic'

TODO('Implement the main functionality of the application') // will fail with NotImplementedError
```
