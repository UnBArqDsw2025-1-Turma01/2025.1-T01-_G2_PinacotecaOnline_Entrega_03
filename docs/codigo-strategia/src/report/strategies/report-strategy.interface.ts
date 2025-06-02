import { Report } from '../types/report.type';

export interface ReportStrategy {
  handleReport(report: Report): void;
}
