"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Art = void 0;
class Art {
    id = null;
    title;
    author;
    technique;
    style;
    image;
    description;
    uploadedAt;
    updatedAt = null;
    constructor(title = '', author = '', technique = '', style = '', image = '', description = '') {
        this.title = title;
        this.author = author;
        this.technique = technique;
        this.style = style;
        this.image = image;
        this.description = description;
        this.uploadedAt = new Date();
    }
    clone() {
        const newArt = new Art();
        newArt.title = this.title;
        newArt.author = this.author;
        newArt.technique = this.technique;
        newArt.style = this.style;
        newArt.image = this.image;
        newArt.description = this.description;
        newArt.uploadedAt = new Date();
        return newArt;
    }
    showDetails() {
        console.log("--- Detalhes da Arte ---");
        console.log(`ID: ${this.id}`);
        console.log(`Título: ${this.title}`);
        console.log(`Autor: ${this.author}`);
        console.log(`Técnica: ${this.technique}`);
        console.log(`Estilo: ${this.style}`);
        console.log(`Descrição: ${this.description}`);
        console.log(`Tamanho da Imagem (Base64): ${this.image.length}`);
        console.log(`Data de Upload: ${this.uploadedAt.toLocaleDateString()}`);
    }
}
exports.Art = Art;
//# sourceMappingURL=art.entity.js.map