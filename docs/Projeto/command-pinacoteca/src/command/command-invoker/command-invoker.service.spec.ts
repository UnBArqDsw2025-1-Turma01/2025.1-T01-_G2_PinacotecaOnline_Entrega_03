import { Test, TestingModule } from '@nestjs/testing';
import { CommandInvokerService } from './command-invoker.service';

describe('CommandInvokerService', () => {
  let service: CommandInvokerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandInvokerService],
    }).compile();

    service = module.get<CommandInvokerService>(CommandInvokerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
