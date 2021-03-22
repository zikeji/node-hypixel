import { Components } from "../types/api";

export abstract class BaseClient {
  public abstract call<T extends Components.Schemas.ApiSuccess>(
    path: string,
    parameters?: Record<string, string>
  ): Promise<T & { cached?: boolean }>;
}
