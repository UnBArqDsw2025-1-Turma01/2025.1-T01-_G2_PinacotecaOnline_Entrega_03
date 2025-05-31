import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.service';

// Interface do Implementador para armazenamento de artes
export interface ArtStorageImplementor {
  saveArt(art: Art, user: User): boolean;
}

// Implementador Concreto: Simula armazenamento local para artes
@Injectable()
export class LocalArtStorage implements ArtStorageImplementor {
  saveArt(art: Art, user: User): boolean {
    try {
      // Verificar se o usuário é um artista
      if (user.role !== 'artist') {
        console.error('Erro: Apenas artistas podem publicar arte.');
        return false;
      }
      console.log(`${art.type} publicada: ${art.title} (Técnica/Material: ${art.technique})`);
      return true;
    } catch (error) {
      console.error('Erro ao salvar arte no servidor.');
      return false;
    }
  }
}

// Entidade de Arte
export interface Art {
  title: string;
  technique: string;
  description?: string;
  type: 'Pintura' | 'Escultura';
}

// Serviço de Artes
@Injectable()
export class ArtService {
  constructor(
    @Inject('ArtStorageImplementor')
    private readonly implementor: ArtStorageImplementor,
  ) {}

  // Publica uma arte associada a um usuário
  publishArt(art: Art, user: User): boolean {
    // Valida campos obrigatórios (título e técnica)
    if (!art.title || !art.technique) {
      console.error('Erro: Título ou técnica não fornecidos.');
      return false;
    }
    return this.implementor.saveArt(art, user);
  }
}