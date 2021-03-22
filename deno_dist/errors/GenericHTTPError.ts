export class GenericHTTPError extends Error {
  /** The status code of the response */
  public code: number;
  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, GenericHTTPError.prototype);
  }
}
