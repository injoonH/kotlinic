import { Exception } from './Exception.js'

export class RuntimeException extends Exception {
  constructor(message?: string) {
    super(message)
    this.name = 'RuntimeException'
  }
}
