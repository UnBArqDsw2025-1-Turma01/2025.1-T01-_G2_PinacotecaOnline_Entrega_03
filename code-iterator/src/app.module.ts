import { Module } from '@nestjs/common';
import { ArtModule } from './art.module';
import { UserModule } from './user.module';

@Module({
  imports: [ArtModule, UserModule],
})
export class AppModule {}