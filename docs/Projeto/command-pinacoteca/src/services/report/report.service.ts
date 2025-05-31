import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportService {
  async submitReport(
    userId: number,
    artId: number,
    reason: string,
  ): Promise<void> {
    console.log(
      `[ReportService] User ${userId} reportou arte ${artId}: "${reason}"`,
    );
  }
}
