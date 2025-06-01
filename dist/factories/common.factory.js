"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUserFactory = void 0;
const common_1 = require("@nestjs/common");
const report_status_enum_1 = require("../shared/enums/report-status.enum");
const report_type_enum_1 = require("../shared/enums/report-type.enum");
const common_2 = require("../shared/models/common");
const report_1 = require("../shared/models/report");
let CommonUserFactory = class CommonUserFactory {
    createUser() {
        return new common_2.CommonUser(3, 'Joana Usuária', 'joana@example.com', 'senhaSimples123', 'Usuária comum do sistema', {}, new Date());
    }
    createArt() {
        console.log('usuário não é permitido criar artes');
        return null;
    }
    createReport() {
        return new report_1.Report(3, report_type_enum_1.ReportType.ART, 'Conteúdo impróprio', report_status_enum_1.ReportStatus.PENDING, this.createUser(), new Date(), new Date());
    }
};
exports.CommonUserFactory = CommonUserFactory;
exports.CommonUserFactory = CommonUserFactory = __decorate([
    (0, common_1.Injectable)()
], CommonUserFactory);
//# sourceMappingURL=common.factory.js.map