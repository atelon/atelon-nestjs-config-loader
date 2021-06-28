"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
function getEnv() {
    var _a;
    return (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'DEVELOPMENT';
}
exports.getEnv = getEnv;
//# sourceMappingURL=get-env.js.map