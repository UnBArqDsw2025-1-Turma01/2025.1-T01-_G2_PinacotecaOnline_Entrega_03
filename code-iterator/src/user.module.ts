import { Module } from '@nestjs/common';
import { UserService, LocalUserStorage, UserGallery } from './user.service';

@Module({
  providers: [
    UserService,
    UserGallery,
    {
      provide: 'UserStorageImplementor',
      useClass: LocalUserStorage,
    },
  ],
  exports: [UserService],
})
export class UserModule {}