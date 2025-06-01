// artist.factory.ts
import { Injectable } from '@nestjs/common';

import { ReportStatus } from 'src/shared/enums/report-status.enum';
import { ReportType } from 'src/shared/enums/report-type.enum';
import { Art } from '../shared/models/Art';
import { Artist } from '../shared/models/artist';
import { Report } from '../shared/models/report';
import { UserFactory } from './user.factory.interface';

@Injectable()
export class ArtistFactory implements UserFactory {
  createUser(): Artist {
    return new Artist(
      1,
      'Vinícius',
      'vinicius@example.com',
      'senhaSegura123',
      'Pintor impressionista',
      {}, // endereço fictício
      'Biografia do artista',
      new Date(),
      new Date(),
    );
  }

  createArt(): Art {
    return new Art(
      101,
      'Nascer do Sol',
      'Vinícius',
      'Uma bela pintura sobre esperança',
      'https://example.com/art.jpg',
      1,
      'Óleo sobre tela',
    );
  }

  createReport(): Report {
    return new Report(
      2,
      ReportType.ART,
      'Uso indevido de imagem',
      ReportStatus.PENDING,
      this.createUser(),
      new Date(),
      new Date(),
    );
  }
}
