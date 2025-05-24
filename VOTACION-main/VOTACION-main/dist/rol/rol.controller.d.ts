import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
export declare class RolController {
    private readonly rolService;
    constructor(rolService: RolService);
    create(dto: CreateRolDto): Promise<import("./entities/rol.entity").Rol>;
    findAll(): Promise<import("./entities/rol.entity").Rol[]>;
    findOne(id: string): Promise<import("./entities/rol.entity").Rol | null>;
    update(id: string, dto: CreateRolDto): Promise<import("./entities/rol.entity").Rol | null>;
    remove(id: string): Promise<import("./entities/rol.entity").Rol>;
}
