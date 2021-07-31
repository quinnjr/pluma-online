"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CaslAbilityFactory = void 0;
var common_1 = require("@nestjs/common");
var ability_1 = require("@casl/ability");
var action_1 = require("./action");
var CaslAbilityFactory = /** @class */ (function () {
    function CaslAbilityFactory() {
    }
    CaslAbilityFactory.prototype.createForUser = function (user) {
        var _a = new ability_1.AbilityBuilder(ability_1.Ability), can = _a.can, cannot = _a.cannot, build = _a.build;
        if (user.role === 'Admin') {
            can(action_1.Action.Manage, 'all');
        }
        else {
            can(action_1.Action.Read, 'all');
        }
        return build({
            detectSubjectType: function (item) { return item.constructor; }
        });
    };
    CaslAbilityFactory = __decorate([
        common_1.Injectable()
    ], CaslAbilityFactory);
    return CaslAbilityFactory;
}());
exports.CaslAbilityFactory = CaslAbilityFactory;
