import { Test, TestingModule } from '@nestjs/testing';
import { Authentication } from './authentication';

describe('AuthService', () => {
  let service: Authentication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Authentication],
    }).compile();

    service = module.get(Authentication);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
