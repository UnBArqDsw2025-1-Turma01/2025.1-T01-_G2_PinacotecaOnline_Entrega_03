import { Injectable } from '@nestjs/common';
import { CommonUserFactory, ArtistFactory, AdminFactory } from './userFactory';

@Injectable()
export class UserService {
  private commonUserFactory = new CommonUserFactory();
  private artistFactory = new ArtistFactory();
  private adminFactory = new AdminFactory();

  registerCommonUser(name: string, email: string, password: string): void {
    this.commonUserFactory.registerUser(name, email, password);
  }

  registerArtist(name: string, email: string, password: string, description?: string): void {
    this.artistFactory.registerUser(name, email, password, description);
  }

  registerAdmin(name: string, email: string, password: string): void {
    this.adminFactory.registerUser(name, email, password);
  }
}