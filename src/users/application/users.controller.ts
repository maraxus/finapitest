import { Body, Controller, Post } from '@nestjs/common';
import { UserResponseDTO } from './response/UserResponseDTO';
import { CreateUserRequest } from './request/CreateUserRequest';
import { CreateUser } from '../domain/useCase/createUser';

@Controller('users')
export class UsersController {
  constructor(private readonly createUser: CreateUser){}
  @Post()
  async createUserHandler(@Body() userInput: CreateUserRequest): Promise<UserResponseDTO> {
    const { name, username, account, wallet: { balance } }
      = await this.createUser.execute(userInput.name, userInput.username, userInput.password, userInput.accountBalance)
    return new UserResponseDTO(name, username, account.toString(), balance.toString())
  }
}
