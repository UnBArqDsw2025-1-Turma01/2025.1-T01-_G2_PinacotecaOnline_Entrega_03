import { Art } from '../entities/art.entity';
import { ArtBuilderInterface } from '../interfaces/art-builder.interface';

export class DigitalArtBuilder implements ArtBuilderInterface {
  private art: Partial<Art> = {};

  setTitle(title: string): this {
    this.art.title = title;
    return this;
  }

  setImage(imageUrl: string): this {
    this.art.image = imageUrl;
    return this;
  }

  setTechnique(technique: string): this {
    this.art.technique = `Digital: ${technique}`;
    return this;
  }

  setDescription(description: string): this {
    this.art.description = description;
    return this;
  }

  setAuthor(author: string): this {
    this.art.author = author;
    return this;
  }

  build(): Art {
    return new Art(this.art);
  }
}
