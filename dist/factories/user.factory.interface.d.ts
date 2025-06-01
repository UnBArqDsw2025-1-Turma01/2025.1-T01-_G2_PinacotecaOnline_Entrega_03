import { Art } from '../shared/models/Art';
import { Report } from '../shared/models/Report';
import { User } from '../shared/models/User';
export declare abstract class UserFactory {
    abstract createUser(): User;
    abstract createArt(): Art;
    abstract createReport(): Report;
}
