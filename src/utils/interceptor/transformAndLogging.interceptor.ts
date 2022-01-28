import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { StatusException } from './http-exception.filter';
export interface Response<T> {
  data: T;
}

// https://stackoverflow.com/questions/55406194/nestjs-set-httpstatus-in-interceptor
// https://docs.nestjs.com/exception-filters
@Injectable()
export class TransformAndLoggingInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    console.log('transform and logginginterceptor');
    return next.handle().pipe(
      tap(async (data) => {
        console.log('save logging');
        // console.log(data);
        // console.log(data['errType']);
        // error msg
        // uri
        //
        // get req header
        // TODO:: fix this again.
        // await this.influxLogService.check_measurement();
        // await this.influxLogService.create_log()
        // console.log(`After... ${Date.now() - now}ms`)
      }),
      map((data) => _.pick(data, ['data', 'msg', 'code'])),
      map((data) => {
        //create response
        if (data.code >= 200 && data.code < 300) {
          return data;
        } else {
          throw new StatusException(data, data.code);
        }
      }),
    );
  }
}
