import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService, User } from './user.service';
import { ArtService } from './art.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userService = app.get(UserService);
  const artService = app.get(ArtService);

  // Cria uma galeria para armazenar os usuários
  const userGallery = userService.createUserGallery();

  // Cria uma galeria para armazenar as artes
  const artGallery = artService.createGallery();

  const maria: User = {
    name: 'Maria',
    email: 'maria@email.com',
    password: 'securepassword123',
    description: 'Descrição de Maria',
    role: 'artist',
  };
  if (userGallery.addUser(maria)) {
    artGallery.publishPainting(
      {
        title: 'Noite Estrelada',
        description: 'Uma pintura icônica de Van Gogh',
        technique: 'Óleo sobre tela',
      },
      maria,
    );
  }
  console.log('-----------------------------');

  userGallery.addUser({
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
  userGallery.addUser(validAdmin);
  console.log('-----------------------------');

  const joao: User = {
    name: 'João',
    email: 'joao@email.com',
    password: 'securepassword123',
    description: 'Descrição de João',
    role: 'artist',
  };
  if (userGallery.addUser(joao)) {
    artGallery.publishSculpture(
      {
        title: 'O Pensador',
        description: 'Uma escultura clássica de Rodin',
        material: 'Bronze',
      },
      joao,
    );
  }
  console.log('-----------------------------');

  // Demonstração do uso do Iterator para Usuários
  console.log('Exibindo todos os usuários na galeria:');
  const userIterator = userGallery.getIterator();
  while (userIterator.hasNext()) {
    const user = userIterator.next();
    if (user) {
      console.log(`Usuário: ${user.name} (${user.email}, ${user.role})`);
    }
  }
  console.log('-----------------------------');

  // Demonstração do uso do Iterator para Artes
  console.log('Exibindo todas as artes na galeria:');
  const artIterator = artGallery.getIterator();
  let isFirst = true;
  while (artIterator.hasNext()) {
    const art = artIterator.next();
    if (art) {
      if (!isFirst) {
        console.log('-----------***-----------');
      }
      console.log(art.showDetails());
      isFirst = false;
    }
  }

  await app.close();
}

bootstrap();