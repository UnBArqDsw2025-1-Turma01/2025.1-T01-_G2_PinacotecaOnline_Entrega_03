import { User } from './User';

export class CommonUser extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    description: string,
    address: any,
    createdAt: Date = new Date(),
  ) {
    super(id, name, email, password, description, address, 'common', createdAt);
  }
}
