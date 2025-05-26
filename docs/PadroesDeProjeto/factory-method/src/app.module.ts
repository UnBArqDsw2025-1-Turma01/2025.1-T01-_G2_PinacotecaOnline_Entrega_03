import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { ArtworkService } from './artwork/artwork.service';

@Module({
  imports: [],
  providers: [AppService, UserService, ArtworkService],
})
export class AppModule {}