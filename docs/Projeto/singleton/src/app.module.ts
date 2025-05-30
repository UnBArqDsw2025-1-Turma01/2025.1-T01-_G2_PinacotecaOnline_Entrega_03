import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module'; // Importe o DatabaseModule
import { UserService } from './user/user.service'; // Criaremos este serviço a seguir
import { UserModule } from './user/user.module';   // Criaremos este módulo a seguir

@Module({
  imports: [
    DatabaseModule, // Adicione o DatabaseModule aqui
    UserModule,     // Adicionaremos este módulo para um segundo consumidor
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
