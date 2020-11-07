/* istanbul ignore file */

export class RateLimitError extends Error {
  /**
   * Ignore this for code coverage as reproducing a real rate limit error is difficult.
   */
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}
