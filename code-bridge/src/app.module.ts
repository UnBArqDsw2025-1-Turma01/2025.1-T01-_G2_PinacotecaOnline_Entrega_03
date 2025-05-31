import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ArtModule } from './art.module';

@Module({
  imports: [UserModule, ArtModule],
})
export class AppModule {}