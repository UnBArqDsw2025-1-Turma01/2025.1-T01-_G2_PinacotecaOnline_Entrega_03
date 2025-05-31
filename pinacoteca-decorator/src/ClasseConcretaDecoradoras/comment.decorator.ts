import { ArtDecorator } from '../ClasseBaseDecoradora/art.decorator';

export class CommentDecorator extends ArtDecorator {
  constructor(wrappee, private commentCount: number) {
    super(wrappee);
  }

  showDetails(): string {
    return `${this.wrappee.showDetails()}\n💬 Comentários: ${this.commentCount}`;
  }
}