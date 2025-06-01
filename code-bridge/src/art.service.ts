import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.service';

// Interface do Implementador para exibição de artes
export interface ArtMedia {
  display(): string;
}

// Implementador Concreto: Exibição em formato PNG
@Injectable()
export class PNGImageMedia implements ArtMedia {
  display(): string {
    return 'Exibindo arte em formato PNG';
  }
}

// Implementador Concreto: Exibição em formato JPG
@Injectable()
export class JPGImageMedia implements ArtMedia {
  display(): string {
    return 'Exibindo arte em formato JPG';
  }
}

// Classe Abstrata: Arte
export abstract class Art {
  constructor(
    protected title: string,
    protected description: string,
    protected media: ArtMedia,
  ) {}

  abstract showDetails(): string;
}

// Abstração Refinada: Pintura
@Injectable()
export class Painting extends Art {
  constructor(
    title: string,
    description: string,
    media: ArtMedia,
    private technique: string,
  ) {
    super(title, description, media);
  }

  showDetails(): string {
    return `${this.title} (Pintura)\nDescrição: ${this.description}\nTécnica: ${this.technique}\n${this.media.display()}`;
  }
}

// Abstração Refinada: Escultura
@Injectable()
export class Sculpture extends Art {
  constructor(
    title: string,
    description: string,
    media: ArtMedia,
    private material: string,
  ) {
    super(title, description, media);
  }

  showDetails(): string {
    return `${this.title} (Escultura)\nDescrição: ${this.description}\nMaterial: ${this.material}\n${this.media.display()}`;
  }
}

// Serviço de Artes
@Injectable()
export class ArtService {
  constructor(
    @Inject('ArtMedia')
    private readonly mediaImplementor: ArtMedia,
  ) {}

  // Publica uma pintura associada a um usuário
  publishPainting(painting: { title: string; description?: string; technique: string }, user: User): boolean {
    if (user.role !== 'artist') {
      console.error('Erro: Apenas artistas podem publicar arte.');
      return false;
    }
    if (!painting.title || !painting.technique) {
      console.error('Erro: Título ou técnica não fornecidos.');
      return false;
    }
    const art = new Painting(painting.title, painting.description || 'Sem descrição', this.mediaImplementor, painting.technique);
    console.log(art.showDetails());
    return true;
  }

  // Publica uma escultura associada a um usuário
  publishSculpture(sculpture: { title: string; description?: string; material: string }, user: User): boolean {
    if (user.role !== 'artist') {
      console.error('Erro: Apenas artistas podem publicar arte.');
      return false;
    }
    if (!sculpture.title || !sculpture.material) {
      console.error('Erro: Título ou material não fornecidos.');
      return false;
    }
    const art = new Sculpture(sculpture.title, sculpture.description || 'Sem descrição', this.mediaImplementor, sculpture.material);
    console.log(art.showDetails());
    return true;
  }
}