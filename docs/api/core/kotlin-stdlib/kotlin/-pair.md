# Pair

```ts
class Pair<A, B>
```

Represents a generic pair of two values.

There is no meaning attached to values in this class, it can be used for any purpose.
Pair exhibits value semantics, i.e., two pairs are equal if both components are equal.

## Properties

### first

```ts
first: A
```

First value.

### second

```ts
second: B
```

Second value.

## Methods

### toList

```ts
toList(): [A, B]
```

Converts this pair into a list.

### toString

```ts
toString(): string
```

Returns string representation of the `Pair` including its `first` and `second` values.
