import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArtService } from './art.service';
import { Art } from './art.entity';

@Controller('arts')
export class ArtController {
  constructor(private readonly artService: ArtService) {}

  @Post(':prototypeKey')
  createArtFromPrototype(
    @Param('prototypeKey') prototypeKey: string,
    @Body() body: { title: string; image: string; description: string },
  ): Art | null {
    const art = this.artService.createArtFromPrototype(
      prototypeKey,
      body.title,
      body.image,
      body.description,
    );
    if (art) {
      return this.artService.addArt(art);
    }
    return null;
  }

  @Get()
  listAllArts(): Art[] {
    return this.artService.listAllArts();
  }

  @Get(':id')
  getArt(@Param('id') id: number): Art | undefined {
    return this.artService.getArtById(id);
  }
}
