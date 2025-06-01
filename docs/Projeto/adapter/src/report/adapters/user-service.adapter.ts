import { Injectable, NotFoundException } from '@nestjs/common';
import { IReportUserService } from '../interfaces/ireport-user.service';
import { UserService } from '../../user/user.service'; 

@Injectable()
export class UserServiceAdapter implements IReportUserService {
  constructor(private readonly userService: UserService) {} 

  async getUserSummaryById(
    userId: number,
  ): Promise<{ name: string; email: string } | null> {
    console.log(`[UserServiceAdapter] Recebida requisição para resumir usuário ID: ${userId}`);
    console.log(`[UserServiceAdapter] Chamando userService.findUserById(${userId})`);

    const user = await this.userService.findUserById(userId);

    if (!user) {
      console.warn(`[UserServiceAdapter] Usuário com ID: ${userId} não encontrado pelo UserService.`);
      return null;
    }

    const summary = {
      name: user.name,
      email: user.email,
    };
    console.log(`[UserServiceAdapter] Resumo do usuário preparado: ${JSON.stringify(summary)}`);
    return summary;
  }
}