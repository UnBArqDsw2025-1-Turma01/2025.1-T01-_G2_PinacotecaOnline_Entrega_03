// src/art/art.service.ts

import { Injectable } from '@nestjs/common';
import { Art } from './art.entity';

@Injectable()
export class ArtService {
  private collection: Art[] = [];
  private nextId = 1;
  private prototypeRegistry = new Map<string, Art>();

  constructor() {
    const defaultPrototype = new Art(
      '',
      'Artista Desconhecido',
      'Técnica Mista',
      'Moderno',
      '',
      'Descrição Padrão da Coletânea'
    );
    this.prototypeRegistry.set('defaultColetaneaArt', defaultPrototype);

    const regionalPrototype = new Art(
      '',
      'Artista Regional Brasileiro',
      'Artesanato Local',
      'Regional',
      '',
      'Arte inspirada na cultura regional brasileira.'
    );
    this.prototypeRegistry.set('regionalColetaneaArt', regionalPrototype);
  }

  addArt(art: Art): Art {
    art.id = this.nextId++;
    this.collection.push(art);
    console.log(`Arte "${art.title}" (ID: ${art.id}) adicionada com sucesso.`);
    return art;
  }

  createArtFromPrototype(
    prototypeKey: string,
    newTitle: string,
    newImageBase64: string,
    newDescription: string
  ): Art | null {
    const prototype = this.prototypeRegistry.get(prototypeKey);

    if (!prototype) {
      console.error(`Protótipo '${prototypeKey}' não encontrado.`);
      return null;
    }

    const newArt = prototype.clone();
    newArt.title = newTitle;
    newArt.image = newImageBase64;
    newArt.description = newDescription;

    return newArt;
  }

  getArtById(id: number): Art | undefined {
    return this.collection.find((art) => art.id === id);
  }

  listAllArts(): Art[] {
    return [...this.collection];
  }
}
