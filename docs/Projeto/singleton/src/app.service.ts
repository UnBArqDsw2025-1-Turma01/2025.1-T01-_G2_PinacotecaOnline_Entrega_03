import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DatabaseConnectionPoolService } from './database/database-connection-pool.service';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly dbPoolService: DatabaseConnectionPoolService) {
    this.logger.log(`AppService instance CREATED and injected DatabaseConnectionPoolService (ID: ${dbPoolService.getPoolInstanceId()})`);
  }

  onModuleInit() {
    this.performAppOperations();
  }

  async getHello(): Promise<string> {
    this.logger.log('Attempting to get a connection for getHello...');
    const conn = this.dbPoolService.getConnection();
    if (conn) {
      this.logger.log(`AppService: Successfully got connection: ${conn}`);
      // Simular uso da conexão
      await new Promise(resolve => setTimeout(resolve, 200)); // Simula trabalho
      this.dbPoolService.releaseConnection(conn);
      return `Hello World! Used DB Pool (ID: ${this.dbPoolService.getPoolInstanceId()}). Connection '${conn}' was used and released.`;
    } else {
      this.logger.warn('AppService: Could not get a connection for getHello.');
      return `Hello World! DB Pool (ID: ${this.dbPoolService.getPoolInstanceId()}) is full.`;
    }
  }

  async performAppOperations() {
    this.logger.log('Attempting to get a connection for app operations...');
    const appConn1 = this.dbPoolService.getConnection();
    if (appConn1) {
      this.logger.log(`AppService: Successfully got connection: ${appConn1}`);
      await new Promise(resolve => setTimeout(resolve, 400)); // Simula trabalho
      this.dbPoolService.releaseConnection(appConn1);
    } else {
      this.logger.warn('AppService: Could not get a connection for app operations.');
    }

    const appConn2 = this.dbPoolService.getConnection();
    if (appConn2) {
      this.logger.log(`AppService: Successfully got another connection: ${appConn2}`);
      await new Promise(resolve => setTimeout(resolve, 100)); // Simula trabalho
      this.dbPoolService.releaseConnection(appConn2);
    } else {
      this.logger.warn('AppService: Could not get another connection for app operations.');
    }
  }
}
