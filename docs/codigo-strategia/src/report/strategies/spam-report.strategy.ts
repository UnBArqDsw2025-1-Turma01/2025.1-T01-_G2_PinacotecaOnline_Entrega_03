import { ReportStrategy } from './report-strategy.interface';
import { Report } from '../types/report.type';

export class SpamReportStrategy implements ReportStrategy {
  handleReport(report: Report): void {
    console.log(`[SPAM] Handling spam report for: ${report.content}`);
  }
}
