import { Command } from './command.interface';
import { PublicationService } from '../services/publication/publication.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatePublicationCommand implements Command {
  constructor(
    private readonly receiver: PublicationService,
    private readonly userId: number,
    private readonly content: string,
  ) {}

  async execute(): Promise<void> {
    await this.receiver.createPublication(this.userId, this.content);
  }
}
