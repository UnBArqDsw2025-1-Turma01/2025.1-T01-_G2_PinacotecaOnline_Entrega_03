import { CommonUser } from 'src/shared/models/common';
import { Art } from '../shared/models/Art';
import { Report } from '../shared/models/report';
import { UserFactory } from './user.factory.interface';
export declare class CommonUserFactory implements UserFactory {
    createUser(): CommonUser;
    createArt(): Art;
    createReport(): Report;
}
