import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MlWorkerController } from "./ml-worker.controller";
import { MLPWorkerConsumer } from "./ml-worker.processor";
@Module({
    imports: [
        BullModule.registerQueue({
            name: 'ML_worker',
        }),
    ],
    controllers: [
        MlWorkerController
    ],
    providers: [
        MLPWorkerConsumer
    ]
})
export class MlWorkerModule { }

