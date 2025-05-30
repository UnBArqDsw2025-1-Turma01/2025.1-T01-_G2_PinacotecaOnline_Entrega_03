import { Module } from '@nestjs/common';
import { ArtModule } from './art/art.module';

@Module({
  imports: [ArtModule],
})
export class AppModule {}
