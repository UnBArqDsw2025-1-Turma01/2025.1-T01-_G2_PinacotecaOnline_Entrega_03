// src/client/client.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArtService } from '../art/art.service';

@Injectable()
export class ClientService implements OnModuleInit {
  constructor(private readonly artService: ArtService) {}

  onModuleInit() {
    console.log("\n--- Simulação de Uso do Prototype ---");

    const artPrototypeKey = 'regionalColetaneaArt';

    console.log("\nCriando primeira arte da coletânea regional...");
    const art1 = this.artService.createArtFromPrototype(
      artPrototypeKey,
      "Canto do Sabiá - Floresta Amazônica",
      "base64_imagem_sabiá...",
      "Uma representação vibrante do canto do sabiá na floresta tropical."
    );
    if (art1) {
      this.artService.addArt(art1);
      art1.showDetails();
    }

    console.log("\nCriando segunda arte da coletânea regional...");
    const art2 = this.artService.createArtFromPrototype(
      artPrototypeKey,
      "Festa Junina no Nordeste",
      "base64_imagem_festa_junina...",
      "Cenas típicas das celebrações juninas no interior do Nordeste brasileiro."
    );
    if (art2) {
      this.artService.addArt(art2);
      art2.showDetails();
    }

    console.log("\n--- Verificando a coleção final ---");
    this.artService.listAllArts().forEach((art) => art.showDetails());

    console.log("\n--- Verificando independência dos objetos ---");
    const storedArt1 = this.artService.getArtById(art1?.id || 0);
    const storedArt2 = this.artService.getArtById(art2?.id || 0);

    if (storedArt1 && storedArt2) {
      console.log(`Art 1 (Título): ${storedArt1.title}`);
      console.log(`Art 1 (Autor): ${storedArt1.author}`);
      console.log(`Art 2 (Título): ${storedArt2.title}`);
      console.log(`Art 2 (Autor): ${storedArt2.author}`);
      console.log(`Os objetos são diferentes? ${storedArt1 !== storedArt2}`);
    }
  }
}
