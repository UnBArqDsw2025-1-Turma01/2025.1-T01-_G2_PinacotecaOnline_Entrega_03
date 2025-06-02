import { ArtBuilderInterface } from '../interfaces/art-builder.interface';
import { Art } from '../entities/art.entity';

export class ArtDirector {
  constructor(private builder: ArtBuilderInterface) {}

  constructBasicArt(title: string, author: string): Art {
    return this.builder
      .setTitle(title)
      .setAuthor(author)
      .build();
  }

  constructFullArt(
    title: string,
    image: string,
    technique: string,
    description: string,
    author: string,
  ): Art {
    return this.builder
      .setTitle(title)
      .setImage(image)
      .setTechnique(technique)
      .setDescription(description)
      .setAuthor(author)
      .build();
  }
}
