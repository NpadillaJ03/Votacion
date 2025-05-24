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
exports.TipoCandidaturaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipo_candidatura_entity_1 = require("./entities/tipo-candidatura.entity");
let TipoCandidaturaService = class TipoCandidaturaService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        const existente = await this.repo.findOneBy({ descripcion: dto.descripcion });
        if (existente) {
            throw new common_1.BadRequestException('Ese tipo de candidatura ya existe');
        }
        const nuevo = this.repo.create(dto);
        return this.repo.save(nuevo);
    }
    findAll() {
        return this.repo.find();
    }
    async findOne(id) {
        const tipo = await this.repo.findOneBy({ id_candidatura: id });
        if (!tipo) {
            throw new common_1.NotFoundException(`Tipo de candidatura con ID ${id} no encontrado`);
        }
        return tipo;
    }
    async update(id, dto) {
        const tipo = await this.findOne(id);
        tipo.descripcion = dto.descripcion;
        return this.repo.save(tipo);
    }
    async remove(id) {
        const tipo = await this.findOne(id);
        return this.repo.remove(tipo);
    }
};
exports.TipoCandidaturaService = TipoCandidaturaService;
exports.TipoCandidaturaService = TipoCandidaturaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_candidatura_entity_1.TipoCandidatura)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoCandidaturaService);
//# sourceMappingURL=tipo-candidatura.service.js.map