import { RuntimeException } from './RuntimeException.js'

export class NoSuchElementException extends RuntimeException {
  constructor(message?: string) {
    super(message)
    this.name = 'NoSuchElementException'
  }
}
