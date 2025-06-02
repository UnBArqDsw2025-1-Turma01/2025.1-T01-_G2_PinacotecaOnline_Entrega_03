// art.service.ts
import { Injectable } from '@nestjs/common';
import { Art } from '../entities/art.entity';
import { DigitalArtBuilder } from '../builders/digital-art.builder';
import { ArtDirector } from '../director/art-director';

@Injectable()
export class ArtService {
  createBasicArt(): Art {
    const builder = new DigitalArtBuilder();
    const director = new ArtDirector(builder);
    return director.constructBasicArt('Amanhecer Digital', 'João da Luz');
  }

  createFullArt(): Art {
    const builder = new DigitalArtBuilder();
    const director = new ArtDirector(builder);
    return director.constructFullArt(
      'Mar Digital',
      'https://example.com/mar.jpg',
      'Pintura Virtual',
      'Uma visão serena do oceano digital.',
      'Lúcia TechArt',
    );
  }
}
