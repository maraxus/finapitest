import { Test, TestingModule } from '@nestjs/testing';
import { CreateUser } from './createUser';

describe('Create User', () => {
  let service: CreateUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUser],
    }).compile();

    service = module.get(CreateUser);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
