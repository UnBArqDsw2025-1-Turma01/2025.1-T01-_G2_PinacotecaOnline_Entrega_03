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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtController = void 0;
const common_1 = require("@nestjs/common");
const art_service_1 = require("./art.service");
let ArtController = class ArtController {
    artService;
    constructor(artService) {
        this.artService = artService;
    }
    createArtFromPrototype(prototypeKey, body) {
        const art = this.artService.createArtFromPrototype(prototypeKey, body.title, body.image, body.description);
        if (art) {
            return this.artService.addArt(art);
        }
        return null;
    }
    listAllArts() {
        return this.artService.listAllArts();
    }
    getArt(id) {
        return this.artService.getArtById(id);
    }
};
exports.ArtController = ArtController;
__decorate([
    (0, common_1.Post)(':prototypeKey'),
    __param(0, (0, common_1.Param)('prototypeKey')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], ArtController.prototype, "createArtFromPrototype", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ArtController.prototype, "listAllArts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ArtController.prototype, "getArt", null);
exports.ArtController = ArtController = __decorate([
    (0, common_1.Controller)('arts'),
    __metadata("design:paramtypes", [art_service_1.ArtService])
], ArtController);
//# sourceMappingURL=art.controller.js.map