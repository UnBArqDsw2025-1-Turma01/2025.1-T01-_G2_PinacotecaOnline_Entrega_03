import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService, User } from './user.service';
import { ArtService, Art } from './art.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userService = app.get(UserService);
  const artService = app.get(ArtService);

  const maria: User = {
    name: 'Maria',
    email: 'maria@email.com',
    password: 'securepassword123',
    description: 'Descrição de Maria',
    role: 'artist',
  };
  if (userService.registerUser(maria)) {
    artService.publishArt(
      {
        title: 'Noite Estrelada',
        technique: 'Óleo sobre tela',
        type: 'Pintura',
      },
      maria,
    );
  }
  console.log('-----------------------------');

  userService.registerUser({
    name: 'Admin',
    email: 'admin@invalid',
    password: 'weak',
    role: 'admin',
  });
  console.log('-----------------------------');

  const validAdmin: User = {
    name: 'Admin Válido',
    email: 'admin.valido@email.com',
    password: 'adminpassword123',
    role: 'admin',
  };
  userService.registerUser(validAdmin);
  console.log('-----------------------------');

  const joao: User = {
    name: 'João',
    email: 'joao@email.com',
    password: 'securepassword123',
    description: 'Descrição de João',
    role: 'artist',
  };
  if (userService.registerUser(joao)) {
    artService.publishArt(
      {
        title: 'O Pensador',
        technique: 'Bronze',
        type: 'Escultura',
      },
      joao,
    );
  }
  console.log('-----------------------------');

  await app.close();
}

bootstrap();