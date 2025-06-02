// src/main.ts

import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client/client.module';

async function bootstrap() {
  await NestFactory.createApplicationContext(ClientModule);
}
bootstrap();
