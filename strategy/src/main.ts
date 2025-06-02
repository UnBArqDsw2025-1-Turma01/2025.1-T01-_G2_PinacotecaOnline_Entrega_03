import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';

@Module({
  imports: [ReportModule],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Application is running on http://localhost:3000');
}
bootstrap();
