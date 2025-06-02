import { ReportStrategy } from './report-strategy.interface';
import { Report } from '../types/report.type';

export class InappropriateContentStrategy implements ReportStrategy {
  handleReport(report: Report): void {
    console.log(`[INAPPROPRIATE] Handling inappropriate content: ${report.content}`);
  }
}
