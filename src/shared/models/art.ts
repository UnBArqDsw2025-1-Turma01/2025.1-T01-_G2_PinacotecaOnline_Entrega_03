export class Art {
  constructor(
    public id: number,
    public title: string,
    public artist: string,
    public description: string,
    public image: string,
    public userId: number,
    public tecnica: string = '',
    public visualizationCount: number = 0,
    public comments: string[] = [],
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}

  addComment(comment: string): void {
    this.comments.push(comment);
    this.updatedAt = new Date();
  }

  incrementView(): void {
    this.visualizationCount++;
  }

  showDetails(): string {
    return `Título: ${this.title} | Técnica: ${this.tecnica} | Artista: ${this.artist}`;
  }
}
