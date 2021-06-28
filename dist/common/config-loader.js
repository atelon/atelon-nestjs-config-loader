"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configLoader = void 0;
const fs_1 = require("fs");
const yaml = require("js-yaml");
const config_loader_core_1 = require("./config-loader-core");
const get_env_1 = require("./get-env");
function configLoader(options) {
    return config_loader_core_1.configLoaderCore({
        options,
        getEnvCallback: get_env_1.getEnv,
        callback(path, env) {
            const content = yaml.load(fs_1.readFileSync(path), 'utf8');
            return Object.assign(content, { env });
        },
    });
}
exports.configLoader = configLoader;
//# sourceMappingURL=config-loader.js.map