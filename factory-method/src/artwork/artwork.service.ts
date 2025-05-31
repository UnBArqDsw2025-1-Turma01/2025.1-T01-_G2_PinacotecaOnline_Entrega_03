import { Injectable } from '@nestjs/common';
import { PaintingFactory, SculptureFactory } from './artworkFactory';

@Injectable()
export class ArtworkService {
  private paintingFactory = new PaintingFactory();
  private sculptureFactory = new SculptureFactory();

  publishPainting(title: string, technique: string, description: string, image: string): void {
    this.paintingFactory.publishArtwork(title, technique, description, image);
  }

  publishSculpture(title: string, material: string, description: string, image: string): void {
    this.sculptureFactory.publishArtwork(title, material, description, image);
  }
}