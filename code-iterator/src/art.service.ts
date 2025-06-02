import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.service';

// Interface do Implementador para exibição de artes
export interface ArtMedia {
  display(): string;
}

// Interface para o Iterator
export interface ArtIterator {
  next(): Art | null;
  hasNext(): boolean;
}

// Interface para a coleção de artes
export interface ArtCollection {
  getIterator(): ArtIterator;
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
    protected user: User,
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
    user: User,
    private technique: string,
  ) {
    super(title, description, media, user);
  }

  showDetails(): string {
    return `${this.title} (Pintura)\nArtista: ${this.user.name}\nDescrição: ${this.description}\nTécnica: ${this.technique}\n${this.media.display()}`;
  }
}

// Abstração Refinada: Escultura
@Injectable()
export class Sculpture extends Art {
  constructor(
    title: string,
    description: string,
    media: ArtMedia,
    user: User,
    private material: string,
  ) {
    super(title, description, media, user);
  }

  showDetails(): string {
    return `${this.title} (Escultura)\nArtista: ${this.user.name}\nDescrição: ${this.description}\nMaterial: ${this.material}\n${this.media.display()}`;
  }
}

// Implementação do Iterator Concreto (não injetável)
export class GalleryIterator implements ArtIterator {
  private index: number = 0;

  constructor(private artworks: Art[]) {}

  next(): Art | null {
    if (this.hasNext()) {
      return this.artworks[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.artworks.length;
  }
}

// Implementação da Coleção de Artes
@Injectable()
export class ArtGallery implements ArtCollection {
  private artworks: Art[] = [];

  constructor(
    @Inject('ArtMedia')
    private readonly mediaImplementor: ArtMedia,
  ) {}

  addArt(art: Art): void {
    this.artworks.push(art);
  }

  getIterator(): ArtIterator {
    return new GalleryIterator(this.artworks);
  }

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
    const art = new Painting(painting.title, painting.description || 'Sem descrição', this.mediaImplementor, user, painting.technique);
    this.artworks.push(art);
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
    const art = new Sculpture(sculpture.title, sculpture.description || 'Sem descrição', this.mediaImplementor, user, sculpture.material);
    this.artworks.push(art);
    console.log(art.showDetails());
    return true;
  }
}

// Serviço de Artes
@Injectable()
export class ArtService {
  constructor(
    @Inject('ArtMedia')
    private readonly mediaImplementor: ArtMedia,
  ) {}

  // Cria uma galeria para gerenciar as artes
  createGallery(): ArtGallery {
    return new ArtGallery(this.mediaImplementor);
  }
}