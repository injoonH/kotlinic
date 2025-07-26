import { RuntimeException } from './RuntimeException.js'

export class IllegalArgumentException extends RuntimeException {
  constructor(message?: string) {
    super(message)
    this.name = 'IllegalArgumentException'
  }
}
