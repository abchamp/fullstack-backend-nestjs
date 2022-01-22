import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { InfluxDbModule, InfluxModuleOptions } from "./utils/influx_module";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module'
import { MlWorkerModule } from './ml-worker/ml-worker.module';
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
    //
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    UsersModule,
    AuthModule,
    MlWorkerModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
