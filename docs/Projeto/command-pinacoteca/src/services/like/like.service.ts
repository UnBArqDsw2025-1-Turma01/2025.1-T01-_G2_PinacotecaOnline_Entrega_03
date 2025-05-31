import { Injectable } from '@nestjs/common';

@Injectable()
export class LikeService {
  async likeArt(userId: number, artId: number): Promise<void> {
    console.log(`[LikeService] User ${userId} curtiu arte ${artId}`);
  }
}
