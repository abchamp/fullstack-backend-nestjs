import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Role } from "./role.enum";
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        const isMatch = await bcrypt.compare(password, user['password']);
        if (user && isMatch) {
            return user;
        }
        return null;
    }

    getRoles(role_list) {
        if(role_list.includes('Owner'))
            return 1;
        else if (role_list.includes('Admin'))
            return 10;
        else
            return 100;
    }

    async login(user: any) {
        const account = await this.validateUser(user.username, user.password);
        if (account !== null) {
            const payload = { username: user.username, g: this.getRoles(account.roles)};
            console.log(payload);
            return {
                access_token: this.jwtService.sign(payload),
            };
        } else {
            return false;
        }

    }
}