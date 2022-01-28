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

    getRolesStr(role_list) {
        if(role_list.includes('Owner'))
            return 'ow';
        else if (role_list.includes('Admin'))
            return 'ad';
        else
            return 'st';
    }

    async login(user: any) {
        const account = await this.validateUser(user.username, user.password);
        if (account !== null) {
            const payload = { username: user.username, gp: this.getRoles(account.roles)};
            return {
                access_token: this.jwtService.sign(payload),
                gp: this.getRolesStr(account.roles),
            };
        } else {
            return false;
        }

    }
}