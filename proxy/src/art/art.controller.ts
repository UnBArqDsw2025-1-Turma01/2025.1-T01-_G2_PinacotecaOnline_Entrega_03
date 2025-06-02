import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { CachingArtProxy } from './caching-art.proxy';
import { CreateArtDto } from './create-art.dto';
import { Art } from './art.entity';

@Controller('arts')
export class ArtController {
  constructor(private readonly artService: CachingArtProxy) {}

  @Get()
  async findAll(): Promise<Art[]> {
    return this.artService.listAllArts();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Art> {
    const artId = parseInt(id, 10);
    try {
      return await this.artService.getArtDetails(artId);
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }

  @Post()
  async create(@Body() createArtDto: CreateArtDto): Promise<Art> {
    const art = new Art(createArtDto);
    return this.artService.addArt(art);
  }
}
