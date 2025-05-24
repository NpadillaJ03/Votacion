import { GradoService } from './grado.service';
import { CreateGradoDto } from './dto/create-grado.dto';
export declare class GradoController {
    private readonly gradoService;
    constructor(gradoService: GradoService);
    create(dto: CreateGradoDto): Promise<import("./entities/grado.entity").Grado>;
    findAll(): Promise<import("./entities/grado.entity").Grado[]>;
    findOne(id: string): Promise<import("./entities/grado.entity").Grado>;
    update(id: string, dto: CreateGradoDto): Promise<import("./entities/grado.entity").Grado>;
    remove(id: string): Promise<import("./entities/grado.entity").Grado>;
}
