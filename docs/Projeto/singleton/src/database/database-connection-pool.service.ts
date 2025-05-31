import { Injectable, OnModuleInit, Logger } from '@nestjs/common';

@Injectable()
export class DatabaseConnectionPoolService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseConnectionPoolService.name);
  private connections: string[] = [];
  private readonly MAX_CONNECTIONS = 5; // Simula um máximo de 5 conexões
  private instanceId: string;

  constructor() {
    // Gerar um ID único para esta instância para provar que é um singleton
    this.instanceId = Math.random().toString(36).substring(2, 15);
    this.logger.log(
      `DatabaseConnectionPoolService instance CREATED (ID: ${this.instanceId})`,
    );
    this.initializePool();
  }

  onModuleInit() {
    this.logger.log(
      `DatabaseConnectionPoolService (ID: ${this.instanceId}) has been initialized.`,
    );
  }

  private initializePool() {
    for (let i = 0; i < this.MAX_CONNECTIONS; i++) {
      this.connections.push(`mock_connection_${i + 1}_idle`);
    }
    this.logger.log(
      `Connection pool initialized with ${this.connections.length} mock connections by instance ID: ${this.instanceId}`,
    );
  }

  getConnection(): string | null {
    const availableConnection = this.connections.find((conn) =>
      conn.endsWith('_idle'),
    );

    if (availableConnection) {
      const connIndex = this.connections.indexOf(availableConnection);
      this.connections[connIndex] = availableConnection.replace(
        '_idle',
        '_active',
      );
      this.logger.log(
        `[Instance ID: ${this.instanceId}] Connection '${this.connections[connIndex]}' acquired.`,
      );
      this.printPoolStatus();
      return this.connections[connIndex];
    }

    this.logger.warn(
      `[Instance ID: ${this.instanceId}] No idle connections available. Pool is full.`,
    );
    this.printPoolStatus();
    return null;
  }

  releaseConnection(connectionName: string): void {
    const connIndex = this.connections.findIndex(
      (conn) => conn === connectionName && conn.endsWith('_active'),
    );

    if (connIndex !== -1) {
      this.connections[connIndex] = this.connections[connIndex].replace(
        '_active',
        '_idle',
      );
      this.logger.log(
        `[Instance ID: ${this.instanceId}] Connection '${connectionName}' released.`,
      );
      this.printPoolStatus();
    } else {
      this.logger.warn(
        `[Instance ID: ${this.instanceId}] Attempted to release an invalid or already idle connection: ${connectionName}`,
      );
    }
  }

  private printPoolStatus(): void {
    const activeCount = this.connections.filter((conn) =>
      conn.endsWith('_active'),
    ).length;
    const idleCount = this.connections.filter((conn) =>
      conn.endsWith('_idle'),
    ).length;
    this.logger.log(
      `[Instance ID: ${this.instanceId}] Pool Status: Active = ${activeCount}, Idle = ${idleCount}`,
    );
  }

  getPoolInstanceId(): string {
    return this.instanceId;
  }
}
