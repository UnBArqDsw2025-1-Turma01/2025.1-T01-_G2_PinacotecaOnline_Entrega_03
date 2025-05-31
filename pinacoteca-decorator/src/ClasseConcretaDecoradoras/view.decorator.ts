import { ArtDecorator } from '../ClasseBaseDecoradora/art.decorator';

export class ViewDecorator extends ArtDecorator {
  constructor(wrappee, private views: number) {
    super(wrappee);
  }

  showDetails(): string {
    return `${this.wrappee.showDetails()}\n👁️ Visualizações: ${this.views}`;
  }
}