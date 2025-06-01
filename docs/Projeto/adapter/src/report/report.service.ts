import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IReportUserService, IREPORT_USER_SERVICE_TOKEN } from './interfaces/ireport-user.service';

@Injectable()
export class ReportService {
  constructor(
    @Inject(IREPORT_USER_SERVICE_TOKEN)
    private readonly userServiceProvider: IReportUserService,
  ) {}

  async createReportForUser(userId: number): Promise<void> {
    console.log(`\n[ReportService] Iniciando criação de report para usuário ID: ${userId}`);
    try {
      const userSummary = await this.userServiceProvider.getUserSummaryById(userId);

      if (!userSummary) {
        console.error(`[ReportService] Não foi possível obter o resumo do usuário ID: ${userId} para gerar o report.`);
        throw new NotFoundException(`Usuário com ID ${userId} não encontrado, report não pode ser gerado.`);
      }

      console.log(
        `[ReportService] Dados do usuário recebidos: Nome: ${userSummary.name}, Email: ${userSummary.email}`,
      );
      console.log(
        `[ReportService] Lógica de criação de report para ${userSummary.name} (${userSummary.email}) executaria aqui...`,
      );
      console.log(`[ReportService] report para ${userSummary.name} criado com sucesso (simulado).`);

    } catch (error) {
      console.error(`[ReportService] Erro ao tentar criar report para usuário ID ${userId}: ${error.message}`);
    }
  }
}