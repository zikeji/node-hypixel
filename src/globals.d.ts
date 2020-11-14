declare module "prismarine-nbt" {
  export type ResultValue = { value: { i: unknown[] } };
  export function parse(
    data: ArrayBuffer,
    callback: (err: Error | null, value: ResultValue) => void
  ): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function simplify(data: any): any;
}
