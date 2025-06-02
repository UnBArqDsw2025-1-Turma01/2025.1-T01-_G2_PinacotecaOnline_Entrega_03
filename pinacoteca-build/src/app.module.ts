// app.module.ts
import { Module } from '@nestjs/common';
import { ArtController } from './controller/art.controller';
import { ArtService } from './service/art.service';

@Module({
  imports: [],
  controllers: [ArtController],
  providers: [ArtService],
})
export class AppModule {}
