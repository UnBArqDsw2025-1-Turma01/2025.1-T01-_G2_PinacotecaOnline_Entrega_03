import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReportService } from './report/report.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const reportService = app.get(ReportService);

  console.log('--- INICIANDO SIMULAÇÃO DO PADRÃO ADAPTER ---');

  // Caso 1: Usuário existente
  await reportService.createReportForUser(1); 

  // Caso 2: Usuário existente
  await reportService.createReportForUser(2); 

  // Caso 3: Usuário não existente
  await reportService.createReportForUser(99);

  console.log('\n--- SIMULAÇÃO CONCLUÍDA ---');
  await app.close();
}

bootstrap();