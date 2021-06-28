// eslint-disable-next-line unicorn/import-style, unicorn/prefer-node-protocol
import { join, resolve } from 'path';
import {
  ConfigLoaderOptions,
  ICallbackType,
  IGetEnvCallbackType,
} from '../interfaces';

/**
 * The function loads custom env files based on NODE_ENV
 */
export function configLoaderCore({
  options,
  callback,
  getEnvCallback,
}: {
  options: ConfigLoaderOptions;
  callback: ICallbackType;
  getEnvCallback: IGetEnvCallbackType;
}): Record<string, any> {
  const currentEnv = getEnvCallback();
  const configPath = options.path;
  const devConfigFileName = options.devFilename ?? '.dev.env';
  const testConfigFileName = options.testFilename ?? '.test.env';
  const prodConfigFileName = options.prodFilename ?? '.env';
  let fullPath = '';
  switch (currentEnv) {
    case 'DEVELOPMENT':
      fullPath = resolve(join(configPath, devConfigFileName));
      break;
    case 'PRODUCTION':
      fullPath = resolve(join(configPath, prodConfigFileName));
      break;
    case 'TESTING':
    case 'TEST':
      fullPath = resolve(join(configPath, testConfigFileName));
      break;
    default:
      fullPath = resolve(join(configPath, devConfigFileName));
      break;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return callback(fullPath, currentEnv);
}
