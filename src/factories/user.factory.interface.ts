import { Report } from '../shared/models/Report';
import { User } from '../shared/models/User';

export abstract class UserFactory {
  abstract createUser(): User;
  abstract createReport(): Report;
}
