/** @internal */
export class Queue {
  private promises: [Promise<void>, () => void][] = [];

  /**
   * Wait for the queue.
   */
  public wait(): Promise<void> {
    const next = this.next();
    this.queuePromise();
    return next;
  }

  /**
   * Get the next in queue.
   */
  public next(): Promise<void> {
    if (this.promises.length > 0) {
      return this.promises[this.promises.length - 1][0];
    }
    return Promise.resolve();
  }

  /**
   * Free up the next in queue.
   */
  public free(): void {
    const queued = this.promises.shift();
    if (typeof queued !== "undefined") {
      queued[1]();
    }
  }

  /**
   * Create an empty promise and add it to the queue.
   */
  private queuePromise(): void {
    let resolve: () => void;
    const promise = new Promise<void>((res) => {
      resolve = res;
    });
    this.promises.push([promise, () => resolve()]);
  }
}
