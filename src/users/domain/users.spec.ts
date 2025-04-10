import { Test, TestingModule } from '@nestjs/testing';
import { Users } from './users';

describe('UsersService', () => {
  let service: Users;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Users],
    }).compile();

    service = module.get(Users);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
