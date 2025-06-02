import { Injectable } from '@nestjs/common';
import { Report } from './types/report.type';
import { ReportStrategy } from './strategies/report-strategy.interface';

@Injectable()
export class ReportContext {
  private strategy: ReportStrategy;

  setStrategy(strategy: ReportStrategy) {
    this.strategy = strategy;
  }

  executeReport(report: Report) {
    this.strategy.handleReport(report);
  }
}
