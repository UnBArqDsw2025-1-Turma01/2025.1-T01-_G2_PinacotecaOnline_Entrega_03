import { Injectable } from '@nestjs/common';
import { RealArtService } from './real-art.service';
import { Art } from './art.entity';

@Injectable()
export class CachingArtProxy {
  private cache = new Map<number, Art>();

  constructor(private readonly realService: RealArtService) {}

  async getArtDetails(artId: number): Promise<Art> {
    if (this.cache.has(artId)) {
      console.log('Cache hit:', artId);
      return this.cache.get(artId)!;
    }

    console.log('Cache miss:', artId);
    const art = await this.realService.getArtDetails(artId);
    this.cache.set(artId, art);
    return art;
  }

  async addArt(art: Art): Promise<Art> {
    const addedArt = await this.realService.addArt(art);
    this.cache.set(addedArt.id!, addedArt);
    return addedArt;
  }

  async listAllArts(): Promise<Art[]> {
    return this.realService.listAllArts();
  }
}
