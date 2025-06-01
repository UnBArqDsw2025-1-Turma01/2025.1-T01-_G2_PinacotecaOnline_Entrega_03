"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminFactory = void 0;
const common_1 = require("@nestjs/common");
const report_status_enum_1 = require("../shared/enums/report-status.enum");
const report_type_enum_1 = require("../shared/enums/report-type.enum");
const admin_1 = require("../shared/models/admin");
const Art_1 = require("../shared/models/Art");
const report_1 = require("../shared/models/report");
let AdminFactory = class AdminFactory {
    createUser() {
        return new admin_1.Admin(99, 'Alice Admin', 'alice.admin@example.com', 'adminStrongPassword', 'Moderadora do sistema', {}, new Date());
    }
    createArt() {
        return new Art_1.Art(900, 'Imagem de Moderação', 'Admin Bot', 'Arte gerada para revisão manual', 'https://example.com/moderation.jpg', 99, 'Digital');
    }
    createReport() {
        return new report_1.Report(1, report_type_enum_1.ReportType.ART, 'Comportamento abusivo', report_status_enum_1.ReportStatus.PENDING, this.createUser(), new Date());
    }
};
exports.AdminFactory = AdminFactory;
exports.AdminFactory = AdminFactory = __decorate([
    (0, common_1.Injectable)()
], AdminFactory);
//# sourceMappingURL=admin.factory.js.map