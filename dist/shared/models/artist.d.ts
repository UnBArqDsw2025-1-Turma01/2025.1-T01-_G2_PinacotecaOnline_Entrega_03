import { Art } from './Art';
import { User } from './User';
export declare class Artist extends User {
    biography: string;
    updatedAt: Date;
    constructor(id: number, name: string, email: string, password: string, description: string, address: any, biography: string, createdAt?: Date, updatedAt?: Date);
    submitArt(art: Art): void;
    editArt(): void;
    deleteArt(id: number): void;
}
