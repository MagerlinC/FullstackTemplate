import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [ExampleService],
    }).compile();
  });

  describe('getExamples', () => {
    it('should return examples', () => {
      const appController = app.get(ExampleController);
      expect(appController.getExamples()).toBe(['Hello, World!']);
    });
  });
});
