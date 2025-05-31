import { Command } from './command.interface';
import { LikeService } from '../services/like/like.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LikeArtCommand implements Command {
  constructor(
    private readonly receiver: LikeService,
    private readonly userId: number,
    private readonly artId: number,
  ) {}

  async execute(): Promise<void> {
    await this.receiver.likeArt(this.userId, this.artId);
  }
}
