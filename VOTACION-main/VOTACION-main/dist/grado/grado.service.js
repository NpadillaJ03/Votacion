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
exports.GradoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const grado_entity_1 = require("./entities/grado.entity");
let GradoService = class GradoService {
    gradoRepository;
    constructor(gradoRepository) {
        this.gradoRepository = gradoRepository;
    }
    async create(dto) {
        const existe = await this.gradoRepository.findOneBy({ descripcion: dto.descripcion });
        if (existe) {
            throw new common_1.BadRequestException('Ya existe un grado con esa descripción');
        }
        const nuevo = this.gradoRepository.create(dto);
        return this.gradoRepository.save(nuevo);
    }
    findAll() {
        return this.gradoRepository.find();
    }
    async findOne(id) {
        const grado = await this.gradoRepository.findOneBy({ id_grado: id });
        if (!grado) {
            throw new common_1.NotFoundException(`Grado con ID ${id} no encontrado`);
        }
        return grado;
    }
    async update(id, dto) {
        const grado = await this.findOne(id);
        grado.descripcion = dto.descripcion;
        return this.gradoRepository.save(grado);
    }
    async remove(id) {
        const grado = await this.findOne(id);
        return this.gradoRepository.remove(grado);
    }
};
exports.GradoService = GradoService;
exports.GradoService = GradoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grado_entity_1.Grado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GradoService);
//# sourceMappingURL=grado.service.js.map