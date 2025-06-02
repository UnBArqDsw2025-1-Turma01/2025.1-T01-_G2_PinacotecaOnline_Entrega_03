import { Art } from '../entities/art.entity';

export interface ArtBuilderInterface {
  setTitle(title: string): this;
  setImage(imageUrl: string): this;
  setTechnique(technique: string): this;
  setDescription(description: string): this;
  setAuthor(author: string): this;
  build(): Art;
}
