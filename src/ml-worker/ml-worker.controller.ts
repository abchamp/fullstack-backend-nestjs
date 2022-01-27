import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('mlworker')
export class MlWorkerController {
    // producer
    // create task to add queue
    constructor(@InjectQueue('ML_worker') private readonly mlWorker: Queue) { }
    // upload ml woker
    @Post('queuetest')
    async transcode() {
        await this.mlWorker.add('queuetest', {
            file: 'z-ust.png',
            ts: new Date(),
        }, { 
            delay: 1000,
        })
        return {}
    }

    // upload image and save to and create 
    // response upload image id
    // raw image name
    // extract_result

}
