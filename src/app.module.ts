import { Module } from '@nestjs/common';
import { UsersModule } from './api/users/users.module';
// 
import { InfluxDbModule, InfluxModuleOptions } from "./utils/influx_module";

// import { TrafficService } from "./tf_test";
@Module({
  imports: [
    InfluxDbModule.forRootAsync({
      inject: [],
      useFactory: async (): Promise<InfluxModuleOptions> =>  {
        return {
          host: "localhost",
          database: "server_logging",
          port: 8086
        };
      }
    }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
