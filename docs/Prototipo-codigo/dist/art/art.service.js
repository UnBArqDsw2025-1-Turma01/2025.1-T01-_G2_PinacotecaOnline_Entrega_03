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
exports.ArtService = void 0;
const common_1 = require("@nestjs/common");
const art_entity_1 = require("./art.entity");
let ArtService = class ArtService {
    collection = [];
    nextId = 1;
    prototypeRegistry = new Map();
    constructor() {
        const defaultPrototype = new art_entity_1.Art('', 'Artista Desconhecido', 'Técnica Mista', 'Moderno', '', 'Descrição Padrão da Coletânea');
        this.prototypeRegistry.set('defaultColetaneaArt', defaultPrototype);
        const regionalPrototype = new art_entity_1.Art('', 'Artista Regional Brasileiro', 'Artesanato Local', 'Regional', '', 'Arte inspirada na cultura regional brasileira.');
        this.prototypeRegistry.set('regionalColetaneaArt', regionalPrototype);
    }
    addArt(art) {
        art.id = this.nextId++;
        this.collection.push(art);
        console.log(`Arte "${art.title}" (ID: ${art.id}) adicionada com sucesso.`);
        return art;
    }
    createArtFromPrototype(prototypeKey, newTitle, newImageBase64, newDescription) {
        const prototype = this.prototypeRegistry.get(prototypeKey);
        if (!prototype) {
            console.error(`Protótipo '${prototypeKey}' não encontrado.`);
            return null;
        }
        const newArt = prototype.clone();
        newArt.title = newTitle;
        newArt.image = newImageBase64;
        newArt.description = newDescription;
        return newArt;
    }
    getArtById(id) {
        return this.collection.find((art) => art.id === id);
    }
    listAllArts() {
        return [...this.collection];
    }
};
exports.ArtService = ArtService;
exports.ArtService = ArtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ArtService);
//# sourceMappingURL=art.service.js.map