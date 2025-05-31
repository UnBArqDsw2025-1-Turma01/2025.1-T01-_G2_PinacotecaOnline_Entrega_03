import { Module } from '@nestjs/common';
import { ArtService, LocalArtStorage } from './art.service';

@Module({
  providers: [
    ArtService,
    {
      provide: 'ArtStorageImplementor',
      useClass: LocalArtStorage,
    },
  ],
  exports: [ArtService],
})
export class ArtModule {}