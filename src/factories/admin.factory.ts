// admin.factory.ts
import { Injectable } from '@nestjs/common';

import { ReportStatus } from 'src/shared/enums/report-status.enum';
import { ReportType } from 'src/shared/enums/report-type.enum';
import { Admin } from '../shared/models/admin';
import { Art } from '../shared/models/Art';
import { Report } from '../shared/models/report';
import { UserFactory } from './user.factory.interface';

@Injectable()
export class AdminFactory implements UserFactory {
  createUser(): Admin {
    return new Admin(
      99,
      'Alice Admin',
      'alice.admin@example.com',
      'adminStrongPassword',
      'Moderadora do sistema',
      {},
      new Date(),
    );
  }

  createArt(): Art {
    return new Art(
      900,
      'Imagem de Moderação',
      'Admin Bot',
      'Arte gerada para revisão manual',
      'https://example.com/moderation.jpg',
      99,
      'Digital',
    );
  }

  createReport(): Report {
    return new Report(
      1,
      ReportType.ART,
      'Comportamento abusivo',
      ReportStatus.PENDING,
      this.createUser(),
      new Date(),
    );
  }
}
