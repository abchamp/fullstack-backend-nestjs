import { Module } from '@nestjs/common';
import { UsersModule } from './api/users/users.module';
// 
import { InfluxDbModule, InfluxModuleOptions } from "./utils/influx_module";
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    InfluxDbModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<InfluxModuleOptions> => {
        return {
          host: configService.get<string>('INFLUX_DATABASE_HOST'),
          database: configService.get<string>('INFLUX_DATABASE_DATABASE'),
          port: configService.get<number>('INFLUX_PORT')
        };
      }
    }),
    //
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DATABASE_URI'),
      })
    }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
