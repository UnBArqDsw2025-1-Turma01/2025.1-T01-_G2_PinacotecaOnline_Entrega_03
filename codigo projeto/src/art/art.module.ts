import { Module } from '@nestjs/common';
import { ArtService } from './art.service';
import { ArtController } from './art.controller';

@Module({
  providers: [ArtService],
  controllers: [ArtController],
  exports: [ArtService],
})
export class ArtModule {}
