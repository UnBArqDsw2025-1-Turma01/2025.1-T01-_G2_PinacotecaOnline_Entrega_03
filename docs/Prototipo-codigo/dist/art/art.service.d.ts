import { Art } from './art.entity';
export declare class ArtService {
    private collection;
    private nextId;
    private prototypeRegistry;
    constructor();
    addArt(art: Art): Art;
    createArtFromPrototype(prototypeKey: string, newTitle: string, newImageBase64: string, newDescription: string): Art | null;
    getArtById(id: number): Art | undefined;
    listAllArts(): Art[];
}
