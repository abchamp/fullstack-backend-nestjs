import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { influxLogService } from "../../utils/influx_service/influx_log.service";
@Module({
  controllers: [UsersController],
  providers: [UsersService, influxLogService]
})
export class UsersModule { }
