import { Repository } from 'typeorm';
import { Grado } from './entities/grado.entity';
import { CreateGradoDto } from './dto/create-grado.dto';
export declare class GradoService {
    private readonly gradoRepository;
    constructor(gradoRepository: Repository<Grado>);
    create(dto: CreateGradoDto): Promise<Grado>;
    findAll(): Promise<Grado[]>;
    findOne(id: number): Promise<Grado>;
    update(id: number, dto: CreateGradoDto): Promise<Grado>;
    remove(id: number): Promise<Grado>;
}
