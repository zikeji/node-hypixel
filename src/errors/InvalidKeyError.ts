export class InvalidKeyError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvalidKeyError.prototype);
  }
}
