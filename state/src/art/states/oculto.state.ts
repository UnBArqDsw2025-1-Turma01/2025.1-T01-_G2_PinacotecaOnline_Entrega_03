
import { ArteState } from '../interfaces/arte-state.interface';

export class OcultoState implements ArteState {
  curtir(): void {
    console.log('Não é possível curtir. A arte está oculta.');
  }

  comentar(): void {
    console.log('Não é possível comentar. A arte está oculta.');
  }

  exibir(): void {
    console.log('Arte não está visível ao público.');
  }

  isVisivel(): boolean {
    return false;
  }
}