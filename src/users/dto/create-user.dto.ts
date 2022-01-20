import { Role } from "../../role/role.enum";
export class CreateUserDto {
    username: string
    password: string
    roles: Role[]
}
