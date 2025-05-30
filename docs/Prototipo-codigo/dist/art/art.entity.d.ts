export interface ArtPrototype {
    clone(): Art;
}
export declare class Art implements ArtPrototype {
    id: number | null;
    title: string;
    author: string;
    technique: string;
    style: string;
    image: string;
    description: string;
    uploadedAt: Date;
    updatedAt: Date | null;
    constructor(title?: string, author?: string, technique?: string, style?: string, image?: string, description?: string);
    clone(): Art;
    showDetails(): void;
}
