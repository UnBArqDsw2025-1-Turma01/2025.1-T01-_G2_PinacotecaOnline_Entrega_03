import { ReportStatus } from '../enums/report-status.enum';
import { Report } from './report';
import { User } from './User';

export class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    description: string,
    address: any,
    createdAt: Date = new Date(),
  ) {
    super(id, name, email, password, description, address, 'admin', createdAt);
  }

  rejectReport(report: Report): void {
    report.updateReport(ReportStatus.REJECTED);
    console.log(`Report ${report.id} rejected.`);
  }

  approveReport(report: Report): void {
    report.updateReport(ReportStatus.APPROVED);
    console.log(`Report ${report.id} approved.`);
  }

  reviewReport(report: Report): void {
    report.updateReport(ReportStatus.UNDER_REVIEW);
    console.log(`Report ${report.id} is under review.`);
  }
}
