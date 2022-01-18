import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TrafficService } from "../../tf_test";
@Module({
  controllers: [UsersController],
  providers: [UsersService, TrafficService]
})
export class UsersModule { }
