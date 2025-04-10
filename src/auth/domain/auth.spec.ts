import { Test, TestingModule } from '@nestjs/testing';
import { Auth } from './auth';

describe('AuthService', () => {
  let service: Auth;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Auth],
    }).compile();

    service = module.get(Auth);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
