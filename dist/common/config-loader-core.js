"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configLoaderCore = void 0;
const path_1 = require("path");
function configLoaderCore({ options, callback, getEnvCallback, }) {
    var _a, _b, _c;
    const currentEnv = getEnvCallback();
    const configPath = options.path;
    const devConfigFileName = (_a = options.devFilename) !== null && _a !== void 0 ? _a : '.dev.env';
    const testConfigFileName = (_b = options.testFilename) !== null && _b !== void 0 ? _b : '.test.env';
    const prodConfigFileName = (_c = options.prodFilename) !== null && _c !== void 0 ? _c : '.env';
    let fullPath = '';
    switch (currentEnv) {
        case 'DEVELOPMENT':
            fullPath = path_1.resolve(path_1.join(configPath, devConfigFileName));
            break;
        case 'PRODUCTION':
            fullPath = path_1.resolve(path_1.join(configPath, prodConfigFileName));
            break;
        case 'TESTING':
        case 'TEST':
            fullPath = path_1.resolve(path_1.join(configPath, testConfigFileName));
            break;
        default:
            fullPath = path_1.resolve(path_1.join(configPath, devConfigFileName));
            break;
    }
    return callback(fullPath, currentEnv);
}
exports.configLoaderCore = configLoaderCore;
//# sourceMappingURL=config-loader-core.js.map