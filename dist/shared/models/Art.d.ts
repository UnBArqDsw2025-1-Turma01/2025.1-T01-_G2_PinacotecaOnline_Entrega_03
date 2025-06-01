export declare class Art {
    id: number;
    title: string;
    artist: string;
    description: string;
    image: string;
    userId: number;
    tecnica: string;
    visualizationCount: number;
    comments: string[];
    createdAt: Date;
    updatedAt: Date;
    constructor(id: number, title: string, artist: string, description: string, image: string, userId: number, tecnica?: string, visualizationCount?: number, comments?: string[], createdAt?: Date, updatedAt?: Date);
    addComment(comment: string): void;
    incrementView(): void;
    showDetails(): string;
}
