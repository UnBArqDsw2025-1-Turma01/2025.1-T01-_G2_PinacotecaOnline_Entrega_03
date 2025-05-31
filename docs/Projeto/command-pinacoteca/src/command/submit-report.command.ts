import { Command } from './command.interface';
import { ReportService } from '../services/report/report.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubmitReportCommand implements Command {
  constructor(
    private readonly receiver: ReportService,
    private readonly userId: number,
    private readonly artId: number,
    private readonly reason: string,
  ) {}

  async execute(): Promise<void> {
    await this.receiver.submitReport(this.userId, this.artId, this.reason);
  }
}
