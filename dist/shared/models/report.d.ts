import { ReportStatus } from '../enums/report-status.enum';
import { ReportType } from '../enums/report-type.enum';
import { User } from './User';
export declare class Report {
    id: number;
    type: ReportType;
    reason: string;
    status: ReportStatus;
    user: User;
    createdAt: Date;
    updatedAt?: Date;
    constructor(id: number, type: ReportType, reason: string, status: ReportStatus, user: User, createdAt?: Date, updatedAt?: Date);
    updateReport(status: ReportStatus): void;
}
