import { Admin } from '../shared/models/admin';
import { Art } from '../shared/models/Art';
import { Report } from '../shared/models/report';
import { UserFactory } from './user.factory.interface';
export declare class AdminFactory implements UserFactory {
    createUser(): Admin;
    createArt(): Art;
    createReport(): Report;
}
