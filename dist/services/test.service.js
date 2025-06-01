"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const admin_factory_1 = require("../factories/admin.factory");
const artist_factory_1 = require("../factories/artist.factory");
const common_factory_1 = require("../factories/common.factory");
let TestService = class TestService {
    onModuleInit() {
        this.testFactory('AdminFactory', new admin_factory_1.AdminFactory());
        this.testFactory('ArtistFactory', new artist_factory_1.ArtistFactory());
        this.testFactory('CommonUserFactory', new common_factory_1.CommonUserFactory());
    }
    testFactory(factoryName, factory) {
        console.log(`\n=== Testando ${factoryName} ===`);
        const user = factory.createUser();
        const art = factory.createArt();
        const report = factory.createReport();
        console.log('User:', user);
        console.log('Art:', art);
        console.log('Report:', report);
    }
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    (0, common_1.Injectable)()
], TestService);
//# sourceMappingURL=test.service.js.map