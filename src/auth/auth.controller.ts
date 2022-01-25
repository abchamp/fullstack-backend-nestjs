import { Controller, Request, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TransformAndLoggingInterceptor } from 'src/utils/interceptor/transformAndLogging.interceptor';
import { successResp, errorResp } from 'src/utils/response_handler';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/auth/login')
    @UseInterceptors(TransformAndLoggingInterceptor)
    async login(@Request() req) {
        try {
            let authData = await this.authService.login({
                username: req.body.username,
                password: req.body.password
            });

            if(!authData) {
                return successResp({}, 'Authentication fail', 400, '', 1)
            } else{
                return successResp(authData)
            }
            // console.log(authData);
            
        } catch(err) {
            console.log(err);
            return errorResp({}, "server fail")
        }
   
        //return this.authService.login(req.user);
    }
}