export class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}
