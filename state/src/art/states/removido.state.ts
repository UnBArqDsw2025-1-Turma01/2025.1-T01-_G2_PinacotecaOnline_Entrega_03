
import { ArteState } from '../interfaces/arte-state.interface';

export class RemovidoState implements ArteState {
  curtir(): void {
    console.log('Não é possível curtir. A arte foi removida.');
  }

  comentar(): void {
    console.log('Não é possível comentar. A arte foi removida.');
  }

  exibir(): void {
    console.log('Arte foi removida e não está mais disponível.');
  }

  isVisivel(): boolean {
    return false;
  }
}