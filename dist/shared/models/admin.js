"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const report_status_enum_1 = require("../enums/report-status.enum");
const User_1 = require("./User");
class Admin extends User_1.User {
    constructor(id, name, email, password, description, address, createdAt = new Date()) {
        super(id, name, email, password, description, address, 'admin', createdAt);
    }
    rejectReport(report) {
        report.updateReport(report_status_enum_1.ReportStatus.REJECTED);
        console.log(`Report ${report.id} rejected.`);
    }
    approveReport(report) {
        report.updateReport(report_status_enum_1.ReportStatus.APPROVED);
        console.log(`Report ${report.id} approved.`);
    }
    reviewReport(report) {
        report.updateReport(report_status_enum_1.ReportStatus.UNDER_REVIEW);
        console.log(`Report ${report.id} is under review.`);
    }
}
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map