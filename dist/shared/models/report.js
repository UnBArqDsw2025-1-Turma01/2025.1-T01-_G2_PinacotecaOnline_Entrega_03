"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
class Report {
    constructor(id, type, reason, status, user, createdAt = new Date(), updatedAt) {
        this.id = id;
        this.type = type;
        this.reason = reason;
        this.status = status;
        this.user = user;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.updatedAt = updatedAt ?? new Date();
    }
    updateReport(status) {
        this.status = status;
        this.updatedAt = new Date();
    }
}
exports.Report = Report;
//# sourceMappingURL=report.js.map