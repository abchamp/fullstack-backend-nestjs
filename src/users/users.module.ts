import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
//
import { Users, UsersSchema } from "./users.schema";
//
import { influxLogService } from "../utils/influx_service/influx_log.service";
@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }])],
  controllers: [UsersController],
  providers: [UsersService, influxLogService],
  exports: [UsersService]
})
export class UsersModule { }
