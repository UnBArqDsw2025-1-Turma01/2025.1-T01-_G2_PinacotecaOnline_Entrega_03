// user.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { AdminFactory } from 'src/factories/admin.factory';
import { ArtistFactory } from 'src/factories/artist.factory';
import { CommonUserFactory } from 'src/factories/common.factory';

@Injectable()
export class TestService implements OnModuleInit {
  onModuleInit() {
    this.testFactory('AdminFactory', new AdminFactory());
    this.testFactory('ArtistFactory', new ArtistFactory());
    this.testFactory('CommonUserFactory', new CommonUserFactory());
  }

  testFactory(factoryName: string, factory: any) {
    console.log(`\n=== Testando ${factoryName} ===`);
    const user = factory.createUser();
    const art = factory.createArt();
    const report = factory.createReport();

    console.log('User:', user);
    console.log('Art:', art);
    console.log('Report:', report);
  }
}
