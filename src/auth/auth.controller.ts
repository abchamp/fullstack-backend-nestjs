import { Controller, Request, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TransformAndLoggingInterceptor } from 'src/utils/interceptor/transformAndLogging.interceptor';
@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/auth/login')
    @UseInterceptors(TransformAndLoggingInterceptor)
    async login(@Request() req) {
        let authData = await this.authService.login({
            username: req.body.username,
            password: req.body.password
        });
        // console.log(authData);
        return {
            data: authData,
            code: 200,
            msg: "",
        }
        //return this.authService.login(req.user);
    }
}