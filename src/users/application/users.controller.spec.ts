import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserResponseDTO } from './response/UserResponseDTO';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create user and respond with user response', () => {
    const response: UserResponseDTO = controller.createUser()
    expect(response).toBeInstanceOf(UserResponseDTO)
  });
});
