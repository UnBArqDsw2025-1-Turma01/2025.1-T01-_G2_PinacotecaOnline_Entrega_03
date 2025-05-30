import { OnModuleInit } from '@nestjs/common';
import { ArtService } from '../art/art.service';
export declare class ClientService implements OnModuleInit {
    private readonly artService;
    constructor(artService: ArtService);
    onModuleInit(): void;
}
