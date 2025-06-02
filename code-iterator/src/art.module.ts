import { Module } from '@nestjs/common';
import { ArtService, PNGImageMedia, ArtGallery } from './art.service';

@Module({
  providers: [
    ArtService,
    ArtGallery,
    {
      provide: 'ArtMedia',
      useClass: PNGImageMedia, // Aqui pode ser modificado para JPGImageMedia
    },
  ],
  exports: [ArtService],
})
export class ArtModule {}