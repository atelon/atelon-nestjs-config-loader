import { ConfigLoaderOptions, ICallbackType, IGetEnvCallbackType } from '../interfaces';
export declare function configLoaderCore({ options, callback, getEnvCallback, }: {
    options: ConfigLoaderOptions;
    callback: ICallbackType;
    getEnvCallback: IGetEnvCallbackType;
}): Record<string, any>;
