import { Injectable } from '@nestjs/common';
import { ArtistFactory, AdminFactory } from './userFactory';

@Injectable()
export class UserService {
  private artistFactory = new ArtistFactory();
  private adminFactory = new AdminFactory();

  registerArtist(name: string, email: string, password: string, description?: string): void {
    this.artistFactory.registerUser(name, email, password, description);
  }

  registerAdmin(name: string, email: string, password: string): void {
    this.adminFactory.registerUser(name, email, password);
  }
}