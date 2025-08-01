/**
 * Represents a triad of values
 *
 * There is no meaning attached to values in this class, it can be used for any purpose.
 * Triple exhibits value semantics, i.e., two triples are equal if all three components are equal.
 */
export class Triple<A, B, C> {
  constructor(
    public first: A,
    public second: B,
    public third: C,
  ) {}

  /**
   * Converts this triple into a list.
   */
  toList(): [A, B, C] {
    return [this.first, this.second, this.third]
  }

  /**
   * Returns string representation of the {@linkcode Triple} including
   * its {@linkcode Triple#first}, {@linkcode Triple#second} and {@linkcode Triple#third} values.
   */
  toString(): string {
    return `(${this.first}, ${this.second}, ${this.third})`
  }
}
