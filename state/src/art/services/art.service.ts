import { Injectable } from '@nestjs/common';
import { Art } from '../entities/art.entity';
import { AprovadoState, PendenteState } from '../states';

@Injectable()
export class ArtService {
  criarArtePendente(): Art {
    return new Art(new PendenteState());
  }

  aprovarArte(arte: Art): void {
    arte.mudarEstado(new AprovadoState());
  }

  ocultarArte(arte: Art): void {
    arte.mudarEstado(new OcultoState());
  }

  removerArte(arte: Art): void {
    arte.mudarEstado(new RemovidoState());
  }
}