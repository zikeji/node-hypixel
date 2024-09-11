import { resolve } from "path";
import { Client, ClientOptions } from "../../src";
import { readFile } from "fs/promises";

export class TestClient extends Client {
  constructor(options?: ClientOptions) {
    super("FAKE-KEY", options);
  }

  // @ts-ignore
  public async callMethod(path: string): number {
    const fsPath = `${resolve(__dirname, '../data', ...path.split('/'))}.json`;
    const raw = await readFile(fsPath, 'utf-8');
    return JSON.parse(raw);
  }
}
