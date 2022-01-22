import { Job } from "bull";
import { Process, Processor } from "@nestjs/bull";
import { Logger } from '@nestjs/common';
// consumer
@Processor('ML_worker')
export class MLPWorkerConsumer {
    private readonly logger = new Logger(MLPWorkerConsumer.name);
    @Process('queuetest')
    async queuetest(job: Job<unknown>) {
        this.logger.debug('Start transcoding...');
        this.logger.debug(job.data);
        this.logger.debug('Transcoding completed');
    }
}