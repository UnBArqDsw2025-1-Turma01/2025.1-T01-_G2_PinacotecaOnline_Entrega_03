import { Module } from '@nestjs/common';
import { UserService } from './user.service';
// Não precisamos importar DatabaseModule aqui se ele for Global
// import { DatabaseModule } from '../database/database.module';

@Module({
  // imports: [DatabaseModule], // Necessário se DatabaseModule não for @Global
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
