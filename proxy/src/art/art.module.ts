import { Module } from '@nestjs/common';
import { ArtController } from './art.controller';
import { RealArtService } from './real-art.service';
import { CachingArtProxy } from './caching-art.proxy';

@Module({
  controllers: [ArtController],
  providers: [
    RealArtService,
    {
      provide: CachingArtProxy,
      useFactory: (realService: RealArtService) => new CachingArtProxy(realService),
      inject: [RealArtService],
    },
  ],
})
export class ArtModule {}
