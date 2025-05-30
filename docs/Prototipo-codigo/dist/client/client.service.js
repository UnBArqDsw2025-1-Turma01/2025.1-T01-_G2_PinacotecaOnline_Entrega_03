"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const art_service_1 = require("../art/art.service");
let ClientService = class ClientService {
    artService;
    constructor(artService) {
        this.artService = artService;
    }
    onModuleInit() {
        console.log("\n--- Simulação de Uso do Prototype ---");
        const artPrototypeKey = 'regionalColetaneaArt';
        console.log("\nCriando primeira arte da coletânea regional...");
        const art1 = this.artService.createArtFromPrototype(artPrototypeKey, "Canto do Sabiá - Floresta Amazônica", "base64_imagem_sabiá...", "Uma representação vibrante do canto do sabiá na floresta tropical.");
        if (art1) {
            this.artService.addArt(art1);
            art1.showDetails();
        }
        console.log("\nCriando segunda arte da coletânea regional...");
        const art2 = this.artService.createArtFromPrototype(artPrototypeKey, "Festa Junina no Nordeste", "base64_imagem_festa_junina...", "Cenas típicas das celebrações juninas no interior do Nordeste brasileiro.");
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
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [art_service_1.ArtService])
], ClientService);
//# sourceMappingURL=client.service.js.map