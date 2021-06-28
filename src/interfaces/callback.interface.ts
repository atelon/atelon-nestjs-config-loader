export interface ICallbackType {
  (path: string, env: string): Record<string, any>;
}
