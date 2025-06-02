import { ReportStrategy } from './report-strategy.interface';
import { Report } from '../types/report.type';

export class CopyrightInfringementStrategy implements ReportStrategy {
  handleReport(report: Report): void {
    console.log(`[COPYRIGHT] Handling copyright infringement for: ${report.content}`);
  }
}
