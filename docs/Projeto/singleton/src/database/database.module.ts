import { Module, Global } from '@nestjs/common';
import { DatabaseConnectionPoolService } from './database-connection-pool.service';

@Global() // Torna os provedores deste módulo disponíveis globalmente
@Module({
  providers: [DatabaseConnectionPoolService],
  exports: [DatabaseConnectionPoolService], // Exporta para que outros módulos possam injetá-lo
})
export class DatabaseModule {}