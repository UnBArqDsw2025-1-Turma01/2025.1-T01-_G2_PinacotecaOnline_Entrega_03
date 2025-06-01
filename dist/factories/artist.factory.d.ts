import { Art } from '../shared/models/Art';
import { Artist } from '../shared/models/artist';
import { Report } from '../shared/models/report';
import { UserFactory } from './user.factory.interface';
export declare class ArtistFactory implements UserFactory {
    createUser(): Artist;
    createArt(): Art;
    createReport(): Report;
}
