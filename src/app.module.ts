import { Module } from '@nestjs/common';
import { UsersModule } from './api/users/users.module';
// 
import { InfluxDbModule, InfluxModuleOptions } from "./utils/influx";
// import * as influxDb from "./utils/influx";

import { TrafficService } from "./tf_test";
@Module({
  imports: [
    InfluxDbModule.forRootAsync({
      inject: [],
      useFactory: async (): Promise<InfluxModuleOptions> =>  {
        return {
          host: "localhost",
          database: "influx",
          port: 8086
        };
      }
    }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
