"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.COMMON_USER_FACTORY = exports.ADMIN_FACTORY = exports.ARTIST_FACTORY = void 0;
const common_1 = require("@nestjs/common");
const admin_factory_1 = require("./factories/admin.factory");
const artist_factory_1 = require("./factories/artist.factory");
const common_factory_1 = require("./factories/common.factory");
const test_service_1 = require("./services/test.service");
exports.ARTIST_FACTORY = 'ARTIST_FACTORY';
exports.ADMIN_FACTORY = 'ADMIN_FACTORY';
exports.COMMON_USER_FACTORY = 'COMMON_USER_FACTORY';
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [
            test_service_1.TestService,
            {
                provide: exports.ARTIST_FACTORY,
                useClass: artist_factory_1.ArtistFactory,
            },
            {
                provide: exports.ADMIN_FACTORY,
                useClass: admin_factory_1.AdminFactory,
            },
            {
                provide: exports.COMMON_USER_FACTORY,
                useClass: common_factory_1.CommonUserFactory,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map