import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> { // Alteração aqui: Apenas o tipo de retorno para Promise<string>
    return this.appService.getHello();
  }
}