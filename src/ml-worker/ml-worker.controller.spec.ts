import { Test, TestingModule } from '@nestjs/testing';
import { MlWorkerController } from './ml-worker.controller';

describe('MlWorkerController', () => {
  let controller: MlWorkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MlWorkerController],
    }).compile();

    controller = module.get<MlWorkerController>(MlWorkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
