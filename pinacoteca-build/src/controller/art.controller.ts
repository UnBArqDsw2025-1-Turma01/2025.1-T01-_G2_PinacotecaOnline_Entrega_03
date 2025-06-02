import { Controller, Get } from '@nestjs/common';
import { ArtService } from '../service/art.service';
import { Art } from '../entities/art.entity';

@Controller('art')
export class ArtController {
  constructor(private readonly artService: ArtService) {}

  @Get('basic')
  getBasicArt(): Art {
    return this.artService.createBasicArt();
  }

  @Get('full')
  getFullArt(): Art {
    return this.artService.createFullArt();
  }
}
