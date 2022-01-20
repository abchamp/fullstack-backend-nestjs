import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/auth/login')
    async login(@Request() req) {
        return this.authService.login({
            username: req.body.username,
            password: req.body.password
        });
        //return this.authService.login(req.user);
    }
}