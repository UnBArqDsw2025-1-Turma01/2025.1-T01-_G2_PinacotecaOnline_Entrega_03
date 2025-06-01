"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Art = void 0;
class Art {
    constructor(id, title, artist, description, image, userId, tecnica = '', visualizationCount = 0, comments = [], createdAt = new Date(), updatedAt = new Date()) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.description = description;
        this.image = image;
        this.userId = userId;
        this.tecnica = tecnica;
        this.visualizationCount = visualizationCount;
        this.comments = comments;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    addComment(comment) {
        this.comments.push(comment);
        this.updatedAt = new Date();
    }
    incrementView() {
        this.visualizationCount++;
    }
    showDetails() {
        return `Título: ${this.title} | Técnica: ${this.tecnica} | Artista: ${this.artist}`;
    }
}
exports.Art = Art;
//# sourceMappingURL=Art.js.map