"use strict";
exports.__esModule = true;
exports.Public = exports.IS_PUBLIC_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
var Public = function () { return common_1.SetMetadata(exports.IS_PUBLIC_KEY, true); };
exports.Public = Public;
