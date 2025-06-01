import { ReportStatus } from '../enums/report-status.enum';
import { ReportType } from '../enums/report-type.enum';
import { User } from './User';

export class Report {
  constructor(
    public id: number,
    public type: ReportType,
    public reason: string,
    public status: ReportStatus,
    public user: User,
    public createdAt: Date = new Date(),
    public updatedAt?: Date,
  ) {
    this.updatedAt = updatedAt ?? new Date();
  }

  updateReport(status: ReportStatus): void {
    this.status = status;
    this.updatedAt = new Date();
  }
}
