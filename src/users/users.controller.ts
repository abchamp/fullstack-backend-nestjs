import { Controller, Request, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TransformAndLoggingInterceptor } from 'src/utils/interceptor/transformAndLogging.interceptor';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { successResp, errorResp } from 'src/utils/response_handler';
import { RolesGuard } from 'src/auth/producer.roles.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // set roles
    createUserDto.roles = []
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @UseInterceptors(TransformAndLoggingInterceptor)
  async findAll(@Request() req) {
    let userData = await this.usersService.findAll()
    // filter unwanted data
    try {
      return successResp(userData)
    } catch(error) {
      return errorResp({})
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
