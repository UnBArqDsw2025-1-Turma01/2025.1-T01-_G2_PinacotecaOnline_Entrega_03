import { Art } from '../Interface/art.interface';

export class BasicArt implements Art {
  constructor(
    private title: string,
    private artist: string,
    private technique: string,
    private description: string,
  ) {}

  showDetails(): string {
    return `🎨 ${this.title} por ${this.artist} (${this.technique})\n${this.description}`;
  }
}

