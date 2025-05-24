import { Repository } from 'typeorm';
import { Rol } from './entities/rol.entity';
import { CreateRolDto } from './dto/create-rol.dto';
export declare class RolService {
    private readonly rolRepository;
    constructor(rolRepository: Repository<Rol>);
    create(dto: CreateRolDto): Promise<Rol>;
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol | null>;
    update(id: number, dto: CreateRolDto): Promise<Rol | null>;
    remove(id: number): Promise<Rol>;
}
