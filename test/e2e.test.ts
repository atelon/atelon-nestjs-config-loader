import { configLoader } from '../src/main';
import { ConfigLoaderOptions } from '../src/interfaces';


const optionsPath: ConfigLoaderOptions = {
  path: './test'
};

describe('configLoader', () => {

  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    process.env = { ...OLD_ENV }; // Make a copy
  });

  afterEach(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  test('Should load dev env file', () => {

    process.env.NODE_ENV = 'DEVELOPMENT';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoader( optionsPath );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    expect(res).toEqual({
      'app': {
        'port': 3000
      },
      'db': {
        'type': '3000'
      },
      'env': 'DEVELOPMENT',
    });

  });

  test('Should load dev env file, default case', () => {

    process.env.NODE_ENV = 'asdasdwad';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoader( optionsPath );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    expect(res).toEqual({
      'app': {
        'port': 3000
      },
      'db': {
        'type': '3000'
      },
      'env': 'asdasdwad',
    });

  });

  test('Should load prod env file', () => {

    process.env.NODE_ENV = 'PRODUCTION';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoader( optionsPath );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    expect(res).toEqual({
      'app': {
        'port': 4000
      },
      'db': {
        'type': '4000'
      },
      'env': 'PRODUCTION',
    });

  });

  test('Should load test env file, #1', () => {

    process.env.NODE_ENV = 'TESTING';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoader( optionsPath );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    expect(res).toEqual({
      'app': {
        'port': 5000
      },
      'db': {
        'type': '5000'
      },
      'env': 'TESTING',
    });

  });

  test('Should load test env file, #2', () => {

    process.env.NODE_ENV = 'TEST';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = configLoader( optionsPath );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    expect(res).toEqual({
      'app': {
        'port': 5000
      },
      'db': {
        'type': '5000'
      },
      'env': 'TEST',
    });

  });

});
