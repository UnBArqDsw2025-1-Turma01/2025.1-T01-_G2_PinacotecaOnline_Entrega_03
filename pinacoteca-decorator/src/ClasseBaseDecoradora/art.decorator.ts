import { Art } from '../Interface/art.interface';

export abstract class ArtDecorator implements Art {
  constructor(protected wrappee: Art) {}

  abstract showDetails(): string;
}