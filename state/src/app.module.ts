import { Module } from '@nestjs/common';
import { ArtController } from './art/controllers/art.controller';
import { ArtService } from './art/services/art.service';

@Module({
  imports: [],
  controllers: [ArtController],
  providers: [ArtService],
})
export class AppModule {}