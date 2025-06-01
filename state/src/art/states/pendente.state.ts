
import { ArteState } from '../interfaces/arte-state.interface';

export class PendenteState implements ArteState {
  curtir(): void {
    console.log('Não é possível curtir. A arte ainda está pendente.');
  }

  comentar(): void {
    console.log('Não é possível comentar. A arte ainda está pendente.');
  }

  exibir(): void {
    console.log('Arte não está visível ao público.');
  }

  isVisivel(): boolean {
    return false;
  }
}