import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArtService } from '../services/art.service';
import { Art } from '../entities/art.entity';

@Controller('arts')
export class ArtController {
  constructor(private readonly artService: ArtService) {}

  @Get('criar-pendente')
  criarArtePendente(): Art {
    const arte = this.artService.criarArtePendente();
    arte.exibir(); // Arte não está visível ao público.
    return arte;
  }

  @Post(':id/aprovar')
  aprovarArte(@Param('id') id: string): string {
    const arte = this.artService.criarArtePendente();
    this.artService.aprovarArte(arte);
    arte.exibir(); // Arte está visível ao público.
    return `Arte ${id} aprovada.`;
  }
}