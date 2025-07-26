# Kotlinic

Kotlinic is a JavaScript/TypeScript library that brings Kotlin-like extension functions to your codebase, enabling a
more functional and expressive coding style.

## Features

- A rich set of extension functions inspired by Kotlin
- Works seamlessly with JavaScript and TypeScript
- Functional programming utilities for arrays, objects, and more

## Installation

```sh
npm install kotlinic
```

## Usage

```ts
import { mapNotNull } from 'kotlinic/collections'

const numbers = [1, 2, null, 4, null, 6]
const nonNullNumbers = mapNotNull(numbers, (it) => it)

console.log(nonNullNumbers) // Output: [1, 2, 4, 6]
```

## License

MIT © Injoon Hwang. See [LICENSE](./LICENSE) for details.
