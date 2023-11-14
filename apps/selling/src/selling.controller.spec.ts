import { Test, TestingModule } from '@nestjs/testing';
import { SellingController } from './selling.controller';
import { SellingService } from './selling.service';

describe('SellingController', () => {
  let sellingController: SellingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SellingController],
      providers: [SellingService],
    }).compile();

    sellingController = app.get<SellingController>(SellingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sellingController.getHello()).toBe('Hello World!');
    });
  });
});
