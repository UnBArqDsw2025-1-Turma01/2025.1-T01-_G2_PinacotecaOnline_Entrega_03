import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicationService {
  async createPublication(userId: number, content: string): Promise<void> {
    console.log(`[PublicationService] User ${userId} criou: "${content}"`);
  }
}
