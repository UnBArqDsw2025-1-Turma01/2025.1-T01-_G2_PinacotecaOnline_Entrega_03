"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistFactory = void 0;
const common_1 = require("@nestjs/common");
const report_status_enum_1 = require("../shared/enums/report-status.enum");
const report_type_enum_1 = require("../shared/enums/report-type.enum");
const Art_1 = require("../shared/models/Art");
const artist_1 = require("../shared/models/artist");
const report_1 = require("../shared/models/report");
let ArtistFactory = class ArtistFactory {
    createUser() {
        return new artist_1.Artist(1, 'Vinícius', 'vinicius@example.com', 'senhaSegura123', 'Pintor impressionista', {}, 'Biografia do artista', new Date(), new Date());
    }
    createArt() {
        return new Art_1.Art(101, 'Nascer do Sol', 'Vinícius', 'Uma bela pintura sobre esperança', 'https://example.com/art.jpg', 1, 'Óleo sobre tela');
    }
    createReport() {
        return new report_1.Report(2, report_type_enum_1.ReportType.ART, 'Uso indevido de imagem', report_status_enum_1.ReportStatus.PENDING, this.createUser(), new Date(), new Date());
    }
};
exports.ArtistFactory = ArtistFactory;
exports.ArtistFactory = ArtistFactory = __decorate([
    (0, common_1.Injectable)()
], ArtistFactory);
//# sourceMappingURL=artist.factory.js.map