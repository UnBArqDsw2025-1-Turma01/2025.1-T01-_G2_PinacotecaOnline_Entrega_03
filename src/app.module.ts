import { Module } from '@nestjs/common';
import { AdminFactory } from './factories/admin.factory';
import { ArtistFactory } from './factories/artist.factory';
import { CommonUserFactory } from './factories/common.factory';
import { TestService } from './services/test.service';

export const ARTIST_FACTORY = 'ARTIST_FACTORY';
export const ADMIN_FACTORY = 'ADMIN_FACTORY';
export const COMMON_USER_FACTORY = 'COMMON_USER_FACTORY';

@Module({
  imports: [],
  controllers: [],
  providers: [
    TestService,
    {
      provide: ARTIST_FACTORY,
      useClass: ArtistFactory,
    },
    {
      provide: ADMIN_FACTORY,
      useClass: AdminFactory,
    },
    {
      provide: COMMON_USER_FACTORY,
      useClass: CommonUserFactory,
    },
  ],
})
export class AppModule {}
