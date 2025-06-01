import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module'; 
import { UserServiceAdapter } from './adapters/user-service.adapter';
import { ReportService } from './report.service';
import { IREPORT_USER_SERVICE_TOKEN } from './interfaces/ireport-user.service';

@Module({
  imports: [UserModule], 
  providers: [
    ReportService,
    {
      provide: IREPORT_USER_SERVICE_TOKEN,
      useClass: UserServiceAdapter,
    },
  ],
  exports: [ReportService],
})
export class ReportModule {}
