import { Injectable } from '@nestjs/common';

import { ReportStatus } from 'src/shared/enums/report-status.enum';
import { ReportType } from 'src/shared/enums/report-type.enum';
import { CommonUser } from 'src/shared/models/common';
import { Art } from '../shared/models/Art';
import { Report } from '../shared/models/report';
import { UserFactory } from './user.factory.interface';

@Injectable()
export class CommonUserFactory implements UserFactory {
  createUser(): CommonUser {
    return new CommonUser(
      3,
      'Joana Usuária',
      'joana@example.com',
      'senhaSimples123',
      'Usuária comum do sistema',
      {}, // endereço fictício
      new Date(),
    );
  }

  createArt(): Art {
    console.log('usuário não é permitido criar artes');
    return null;
  }

  createReport(): Report {
    return new Report(
      3,
      ReportType.ART,
      'Conteúdo impróprio',
      ReportStatus.PENDING,
      this.createUser(),
      new Date(),
      new Date(),
    );
  }
}
