// eslint-disable-next-line unicorn/prefer-node-protocol
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
// eslint-disable-next-line unicorn/import-style, unicorn/prefer-node-protocol
import { ConfigLoaderOptions } from '../interfaces';
import { configLoaderCore } from './config-loader-core';
import { getEnv } from './get-env';

/**
 * The function loads custom env files based on NODE_ENV
 */
export function configLoader(
  options: ConfigLoaderOptions,
): Record<string, any> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return configLoaderCore({
    options,
    getEnvCallback: getEnv,
    callback(path: string, env: string) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const content = yaml.load(readFileSync(path), 'utf8');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return Object.assign(content, { env });
    },
  });
}
