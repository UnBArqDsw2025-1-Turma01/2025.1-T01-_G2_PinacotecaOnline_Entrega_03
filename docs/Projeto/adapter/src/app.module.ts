import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    UserModule,
    ReportModule,
  ],
})
export class AppModule {}
