import { Module } from '@nestjs/common';
import { ReportContext } from './report-context.service';
import { ReportController } from './report.controller';

@Module({
  providers: [ReportContext],
  controllers: [ReportController],
})
export class ReportModule {}
