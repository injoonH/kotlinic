/**
 * Represents a generic pair of two values.
 *
 * There is no meaning attached to values in this class, it can be used for any purpose.
 * Pair exhibits value semantics, i.e., two pairs are equal if both components are equal.
 */
export class Pair<A, B> {
  constructor(
    public first: A,
    public second: B,
  ) {}

  /**
   * Converts this pair into a list.
   */
  toList(): [A, B] {
    return [this.first, this.second]
  }

  /**
   * Returns string representation of the {@linkcode Pair} including its
   * {@linkcode Pair#first} and {@linkcode Pair#second} values.
   */
  toString(): string {
    return `(${this.first}, ${this.second})`
  }
}
