# Triple

```ts
class Triple<A, B, C>
```

Represents a triad of values.

There is no meaning attached to values in this class, it can be used for any purpose.
Triple exhibits value semantics, i.e., two triples are equal if all three components are equal.

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

### third

```ts
third: C
```

Third value.

## Methods

### toList

```ts
toList(): [A, B, C]
```

Converts this triple into a list.

### toString

```ts
toString(): string
```

Returns string representation of the `Triple` including its `first`, `second` and `third` values.
