"use strict";
exports.__esModule = true;
exports.Policy = exports.POLICY_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.POLICY_KEY = 'check_policy';
var Policy = function () {
    var handlers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        handlers[_i] = arguments[_i];
    }
    return common_1.SetMetadata(exports.POLICY_KEY, handlers);
};
exports.Policy = Policy;
