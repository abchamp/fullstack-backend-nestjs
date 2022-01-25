import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user['password'] === password) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const account = await this.validateUser(user.username, user.password);
        if (account !== null) {
            const payload = { username: user.username, sub: user.userId };
            return {
                access_token: this.jwtService.sign(payload),
            };
        } else {
            return {}
        }

    }
}