// src/report/report.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ReportContext } from './report-context.service';
import { SpamReportStrategy } from './strategies/spam-report.strategy';
import { CopyrightInfringementStrategy } from './strategies/copyright-infringement.strategy';
import { InappropriateContentStrategy } from './strategies/inappropriate-content.strategy';
import { Report } from './types/report.type';

@Controller('report')
export class ReportController {
  constructor(private readonly reportContext: ReportContext) {}

  @Post()
  handleReport(@Body() report: Report) {
    switch (report.type) {
      case 'spam':
        this.reportContext.setStrategy(new SpamReportStrategy());
        break;
      case 'copyright':
        this.reportContext.setStrategy(new CopyrightInfringementStrategy());
        break;
      case 'inappropriate':
        this.reportContext.setStrategy(new InappropriateContentStrategy());
        break;
      default:
        throw new Error(`Tipo de denúncia não suportado: ${report.type}`);
    }

    this.reportContext.executeReport(report);
    return { message: 'Denúncia processada com sucesso.' };
  }
}
