import { Module } from '@nestjs/common';
import { UserService, LocalUserStorage } from './user.service';

@Module({
  providers: [
    UserService,
    {
      provide: 'UserStorageImplementor',
      useClass: LocalUserStorage,
    },
  ],
  exports: [UserService],
})
export class UserModule {}