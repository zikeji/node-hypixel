export abstract class BaseClient {
  public abstract call<T extends Record<string, unknown>>(
    path: string,
    parameters?: Record<string, string>
  ): Promise<T & { cached?: boolean }>;
}
