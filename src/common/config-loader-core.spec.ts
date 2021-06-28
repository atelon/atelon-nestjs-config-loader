// eslint-disable-next-line unicorn/prefer-node-protocol, unicorn/import-style
import { join } from 'path';

import { configLoaderCore } from './config-loader-core';

const getDevEnv = () => 'DEVELOPMENT';
const filenameDevEnv = '.dev.env';

const getTestEnv = () => 'TESTING';
const filenameTestEnv = '.test.env';

const getProdEnv = () => 'PRODUCTION';
const filenameProdEnv = '.env';

const getUnknownEnv = () => 'ASDAWFAWF';
const filenameUnknownEnv = '.dev.env';

const optionsTestOnlyPath = {
  path: '/nowhere',
};

// eslint-disable-next-line unicorn/consistent-function-scoping
const callback = (path: string, env: string) => ({ path, env });

describe('configLoaderCore', () => {
  test('Should return dev env', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoaderCore({
      options: optionsTestOnlyPath,
      getEnvCallback: getDevEnv,
      callback,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res).toEqual({
      path: join(optionsTestOnlyPath.path, filenameDevEnv),
      env: getDevEnv(),
    });
  });

  test('Should return default dev', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoaderCore({
      options: optionsTestOnlyPath,
      getEnvCallback: getUnknownEnv,
      callback,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res).toEqual({
      path: join(optionsTestOnlyPath.path, filenameUnknownEnv),
      env: getUnknownEnv(),
    });
  });

  test('Should return test env', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoaderCore({
      options: optionsTestOnlyPath,
      getEnvCallback: getTestEnv,
      callback,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res).toEqual({
      path: join(optionsTestOnlyPath.path, filenameTestEnv),
      env: getTestEnv(),
    });
  });

  test('Should return prod env', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoaderCore({
      options: optionsTestOnlyPath,
      getEnvCallback: getProdEnv,
      callback,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res).toEqual({
      path: join(optionsTestOnlyPath.path, filenameProdEnv),
      env: getProdEnv(),
    });
  });
});
