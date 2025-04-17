import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserResponseDTO } from './response/UserResponseDTO';
import { CreateUserRequest } from './request/CreateUserRequest';
import { CreateUser } from '../domain/useCase/createUser';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [CreateUser]
    }).compile();

    controller = module.get(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create user and respond with user response', async () => {
    const input: CreateUserRequest =  { name: "Joana Banana", username: "banane", password: "moscounbanana", accountBalance: 33.22}
    const response: UserResponseDTO = await controller.createUserHandler(input)
    expect(response).toBeInstanceOf(UserResponseDTO)
  });
});
