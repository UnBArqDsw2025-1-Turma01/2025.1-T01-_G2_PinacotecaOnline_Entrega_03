import { ArtDecorator } from '../ClasseBaseDecoradora/art.decorator';

export class LikeDecorator extends ArtDecorator {
  constructor(wrappee, private likeCount: number) {
    super(wrappee);
  }

  showDetails(): string {
    return `${this.wrappee.showDetails()}\n❤️ Curtidas: ${this.likeCount}`;
  }
}