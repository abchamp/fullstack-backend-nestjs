import { Role } from "src/auth/role.enum";
export class CreateUserDto {
    username: string
    password: string
    roles: Role[]
}
