import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService, User } from './user.service';
import { ArtService } from './art.service';

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
    artService.publishPainting(
      {
        title: 'Noite Estrelada',
        description: 'Uma pintura icônica de Van Gogh',
        technique: 'Óleo sobre tela',
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
    artService.publishSculpture(
      {
        title: 'O Pensador',
        description: 'Uma escultura clássica de Rodin',
        material: 'Bronze',
      },
      joao,
    );
  }
  console.log('-----------------------------');

  await app.close();
}

bootstrap();