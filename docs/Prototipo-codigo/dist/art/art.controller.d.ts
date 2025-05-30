import { ArtService } from './art.service';
import { Art } from './art.entity';
export declare class ArtController {
    private readonly artService;
    constructor(artService: ArtService);
    createArtFromPrototype(prototypeKey: string, body: {
        title: string;
        image: string;
        description: string;
    }): Art | null;
    listAllArts(): Art[];
    getArt(id: number): Art | undefined;
}
