import { Repository } from 'typeorm';
import { TipoCandidatura } from './entities/tipo-candidatura.entity';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';
export declare class TipoCandidaturaService {
    private readonly repo;
    constructor(repo: Repository<TipoCandidatura>);
    create(dto: CreateTipoCandidaturaDto): Promise<TipoCandidatura>;
    findAll(): Promise<TipoCandidatura[]>;
    findOne(id: number): Promise<TipoCandidatura>;
    update(id: number, dto: CreateTipoCandidaturaDto): Promise<TipoCandidatura>;
    remove(id: number): Promise<TipoCandidatura>;
}
