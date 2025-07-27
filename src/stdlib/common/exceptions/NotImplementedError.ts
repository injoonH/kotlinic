export class NotImplementedError extends Error {
  constructor(message: string = 'An operation is not implemented.') {
    super(message)
    this.name = 'NotImplementedError'
  }
}
