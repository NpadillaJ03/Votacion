import { TipoCandidaturaService } from './tipo-candidatura.service';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';
export declare class TipoCandidaturaController {
    private readonly service;
    constructor(service: TipoCandidaturaService);
    create(dto: CreateTipoCandidaturaDto): Promise<import("./entities/tipo-candidatura.entity").TipoCandidatura>;
    findAll(): Promise<import("./entities/tipo-candidatura.entity").TipoCandidatura[]>;
    findOne(id: string): Promise<import("./entities/tipo-candidatura.entity").TipoCandidatura>;
    update(id: string, dto: CreateTipoCandidaturaDto): Promise<import("./entities/tipo-candidatura.entity").TipoCandidatura>;
    remove(id: string): Promise<import("./entities/tipo-candidatura.entity").TipoCandidatura>;
}
