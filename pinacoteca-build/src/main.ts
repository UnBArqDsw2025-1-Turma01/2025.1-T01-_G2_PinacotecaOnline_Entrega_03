import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  console.log(`\nArte retornada na porta ${process.env.PORT ?? 3000}`);
  console.log(`Acesse a arte básica em http://localhost:${process.env.PORT ?? 3000}/art/basic`);
  console.log(`Acesse a arte completa em http://localhost:${process.env.PORT ?? 3000}/art/full`);
}
bootstrap();
