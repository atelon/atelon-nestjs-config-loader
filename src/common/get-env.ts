/**
 * The function returns env var
 */
export function getEnv(): string {
  return process.env.NODE_ENV ?? 'DEVELOPMENT';
}
