import { Injectable } from '@nestjs/common';
import { Art } from './art.entity';

@Injectable()
export class RealArtService {
  private mockDb: Art[] = [];
  private nextId = 1;

  async getArtDetails(artId: number): Promise<Art> {
    const art = this.mockDb.find((a) => a.id === artId);
    if (!art) {
      throw new Error(`Arte com ID ${artId} não encontrada.`);
    }
    return art;
  }

  async addArt(art: Art): Promise<Art> {
    art.id = this.nextId++;
    art.uploadedAt = new Date();
    this.mockDb.push(art);
    return art;
  }

  async listAllArts(): Promise<Art[]> {
    return this.mockDb;
  }
}
