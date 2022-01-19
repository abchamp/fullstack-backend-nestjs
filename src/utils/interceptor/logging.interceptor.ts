import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs";
import { influxLogService } from "../influx_service/influx_log.service";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private readonly influxLogService: influxLogService) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Before...');

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(async () => {
                    // get req header 
                    console.log(context);
                    await this.influxLogService.check_connect()
                    console.log(`After... ${Date.now() - now}ms`)
                }),
            );
    }
}