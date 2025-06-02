import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ArtModule } from '../art/art.module';

@Module({
  imports: [ArtModule],
  providers: [ClientService],
})
export class ClientModule {}
