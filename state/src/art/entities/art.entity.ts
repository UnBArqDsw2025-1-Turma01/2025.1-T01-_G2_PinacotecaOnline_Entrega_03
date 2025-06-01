import { ArteState } from '../interfaces/arte-state.interface';

export class Art {
  private estado: ArteState;

  constructor(estadoInicial: ArteState) {
    this.estado = estadoInicial;
  }

  public curtir(): void {
    this.estado.curtir();
  }

  public comentar(): void {
    this.estado.comentar();
  }

  public exibir(): void {
    this.estado.exibir();
  }

  public isVisivel(): boolean {
    return this.estado.isVisivel();
  }

  public mudarEstado(novoEstado: ArteState): void {
    this.estado = novoEstado;
  }
}