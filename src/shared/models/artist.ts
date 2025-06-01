import { Art } from './Art';
import { User } from './User';

export class Artist extends User {
  public biography: string;
  public updatedAt: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    description: string,
    address: any,
    biography: string,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date(),
  ) {
    super(id, name, email, password, description, address, 'artist', createdAt);
    this.biography = biography;
    this.updatedAt = updatedAt;
  }

  submitArt(art: Art): void {
    // lógica para enviar uma arte (pode adicionar em algum repositório ou lista)
    console.log(`Art submitted: ${art.title}`);
  }

  editArt(): void {
    // lógica de edição da arte
    console.log('Editing art...');
  }

  deleteArt(id: number): void {
    // lógica de remoção da arte por ID
    console.log(`Art with ID ${id} deleted.`);
  }
}
