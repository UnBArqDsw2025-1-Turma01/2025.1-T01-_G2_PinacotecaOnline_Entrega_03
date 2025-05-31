import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { ArtworkService } from './artwork/artwork.service';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UserService,
    private readonly artworkService: ArtworkService,
  ) {}

  private executeOperation(operation: () => void, separator: string = '----------------------'): void {
    try {
      operation();
      console.log(separator);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Erro: ${error.message}`);
      } else {
        console.error(`Erro desconhecido: ${error}`);
      }
      console.log(separator);
    }
  }

  async runOperations(): Promise<void> {
    try {
      // 1. Artista Maria publica uma pintura
      this.executeOperation(() => {
        this.userService.registerArtist('Maria', 'maria@example.com', '123456', 'Descrição de Maria');
        this.artworkService.publishPainting(
          'Noite Estrelada',
          'Óleo sobre tela',
          'Pintura clássica',
          'imagem.jpg',
        );
      }, '-----------------------------');

      // 2. Administrador
      this.executeOperation(() => {
        this.userService.registerAdmin('Admin', 'admin@example.com', 'admin123');
        this.userService.registerAdmin('Teste', 'email_invalido', '123456');
      }, '-----------------------------');

      // 3. Artista João publica uma escultura
      this.executeOperation(() => {
        this.userService.registerArtist('João', 'joao2@example.com', '123456', 'Descrição de João');
        this.artworkService.publishSculpture(
          'O Pensador',
          'Bronze',
          'Escultura icônica',
          'escultura.png',
        );
      }, '-----------------------------');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Erro inesperado: ${error.message}`);
      } else {
        console.error(`Erro desconhecido inesperado: ${error}`);
      }
    }
  }
}