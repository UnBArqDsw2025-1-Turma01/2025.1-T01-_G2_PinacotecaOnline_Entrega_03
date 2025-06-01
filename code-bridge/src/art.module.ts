import { Module } from '@nestjs/common';
import { ArtService, PNGImageMedia } from './art.service';

@Module({
  providers: [
    ArtService,
    {
      provide: 'ArtMedia',
      useClass: PNGImageMedia, // Aqui pode ser modificado para JPGImageMedia
    },
  ],
  exports: [ArtService],
})
export class ArtModule {}