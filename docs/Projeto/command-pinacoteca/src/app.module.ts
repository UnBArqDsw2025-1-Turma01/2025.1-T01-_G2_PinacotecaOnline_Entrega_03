import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicationService } from './services/publication/publication.service';
import { LikeService } from './services/like/like.service';
import { ReportService } from './services/report/report.service';
import { CommandInvokerService } from './command/command-invoker/command-invoker.service';

@Module({
  providers: [
    AppService,
    PublicationService,
    LikeService,
    ReportService,
    CommandInvokerService,
  ],
})
export class AppModule {}
