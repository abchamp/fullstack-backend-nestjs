import { Role } from "src/auth/role.enum";
export class CreateUserDto {
    name: string
    email: string
    username: string
    password: string
    roles: Role[]
}
