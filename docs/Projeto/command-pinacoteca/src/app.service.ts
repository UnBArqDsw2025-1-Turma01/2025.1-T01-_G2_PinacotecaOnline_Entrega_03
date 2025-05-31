import { Injectable } from '@nestjs/common';
import { CommandInvokerService } from './command/command-invoker/command-invoker.service';
import { PublicationService } from './services/publication/publication.service';
import { LikeService } from './services/like/like.service';
import { ReportService } from './services/report/report.service';

import { CreatePublicationCommand } from './command/create-publication.command';
import { LikeArtCommand } from './command/like-art.command';
import { SubmitReportCommand } from './command/submit-report.command';

@Injectable()
export class AppService {
  constructor(
    private readonly invoker: CommandInvokerService,
    private readonly publicationService: PublicationService,
    private readonly likeService: LikeService,
    private readonly reportService: ReportService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async runDemo(): Promise<void> {
    const cmd1 = new CreatePublicationCommand(
      this.publicationService,
      1,
      'Nova obra!',
    );
    const cmd2 = new LikeArtCommand(this.likeService, 1, 100);
    const cmd3 = new SubmitReportCommand(
      this.reportService,
      2,
      100,
      'Conteúdo ofensivo',
    );

    await this.invoker.run(cmd1);
    await this.invoker.run(cmd2);
    await this.invoker.run(cmd3);
  }
}
