import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs";
import { influxLogService } from "../influx_service/influx_log.service";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private readonly influxLogService: influxLogService) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(async () => {
                    console.log("save logging")
                    // error msg
                    // uri
                    // 
                    // get req header
                    // TODO:: fix this again. 
                    // await this.influxLogService.check_measurement();
                    // await this.influxLogService.create_log()
                    // console.log(`After... ${Date.now() - now}ms`)
                }),
            );
    }
}