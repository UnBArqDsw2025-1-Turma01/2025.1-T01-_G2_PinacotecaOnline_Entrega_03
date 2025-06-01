"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
const User_1 = require("./User");
class Artist extends User_1.User {
    constructor(id, name, email, password, description, address, biography, createdAt = new Date(), updatedAt = new Date()) {
        super(id, name, email, password, description, address, 'artist', createdAt);
        this.biography = biography;
        this.updatedAt = updatedAt;
    }
    submitArt(art) {
        console.log(`Art submitted: ${art.title}`);
    }
    editArt() {
        console.log('Editing art...');
    }
    deleteArt(id) {
        console.log(`Art with ID ${id} deleted.`);
    }
}
exports.Artist = Artist;
//# sourceMappingURL=artist.js.map