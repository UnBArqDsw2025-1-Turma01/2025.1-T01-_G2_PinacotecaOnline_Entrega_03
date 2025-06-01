
import { ArteState } from '../interfaces/arte-state.interface';

export class AprovadoState implements ArteState {
  curtir(): void {
    console.log('Curtindo esta arte.');
  }

  comentar(): void {
    console.log('Comentando nesta arte.');
  }

  exibir(): void {
    console.log('Arte está visível ao público.');
  }

  isVisivel(): boolean {
    return true;
  }
}
