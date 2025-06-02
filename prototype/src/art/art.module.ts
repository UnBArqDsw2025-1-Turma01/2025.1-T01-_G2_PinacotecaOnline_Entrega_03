// src/art/art.module.ts

import { Module } from '@nestjs/common';
import { ArtService } from './art.service';

@Module({
  providers: [ArtService],
  exports: [ArtService],
})
export class ArtModule {}
