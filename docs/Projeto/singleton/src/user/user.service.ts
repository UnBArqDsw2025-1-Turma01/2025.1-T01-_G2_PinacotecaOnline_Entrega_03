import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DatabaseConnectionPoolService } from '../database/database-connection-pool.service';

@Injectable()
export class UserService implements OnModuleInit {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly dbPoolService: DatabaseConnectionPoolService) {
    this.logger.log(`UserService instance CREATED and injected DatabaseConnectionPoolService (ID: ${dbPoolService.getPoolInstanceId()})`);
  }

  onModuleInit() {
    this.performUserOperations();
  }

  async performUserOperations() {
    this.logger.log('Attempting to get a connection for user operations...');
    const userConn1 = this.dbPoolService.getConnection();
    if (userConn1) {
      this.logger.log(`UserService: Successfully got connection: ${userConn1}`);
      // Simular alguma operação
      await new Promise(resolve => setTimeout(resolve, 500)); // Simula trabalho
      this.dbPoolService.releaseConnection(userConn1);
    } else {
      this.logger.warn('UserService: Could not get a connection.');
    }

    const userConn2 = this.dbPoolService.getConnection();
    if (userConn2) {
      this.logger.log(`UserService: Successfully got another connection: ${userConn2}`);
      // Simular alguma operação
      await new Promise(resolve => setTimeout(resolve, 300)); // Simula trabalho
      // Não vamos liberar esta para testar o limite
      // this.dbPoolService.releaseConnection(userConn2);
    } else {
      this.logger.warn('UserService: Could not get another connection.');
    }
  }
}