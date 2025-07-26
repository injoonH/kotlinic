import { RuntimeException } from './RuntimeException.js'

export class IllegalStateException extends RuntimeException {
  constructor(message?: string) {
    super(message)
    this.name = 'IllegalStateException'
  }
}
