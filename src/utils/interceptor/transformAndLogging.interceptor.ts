import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as _ from 'lodash';
export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformAndLoggingInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        console.log("transform and logginginterceptor");
        return next.handle().pipe(tap(async () => {
            console.log("save logging")
            // error msg
            // uri
            // 
            // get req header
            // TODO:: fix this again. 
            // await this.influxLogService.check_measurement();
            // await this.influxLogService.create_log()
            // console.log(`After... ${Date.now() - now}ms`)
        }), map(data => _.pick(data, ['data', 'msg', 'code'])));
    }
}