import { Body, Controller, Post } from '@nestjs/common';
import { UserResponseDTO } from './response/UserResponseDTO';
import { Money } from '../../core/valueObjects/money';
import { CreateUserRequest } from './request/CreateUserRequest';

@Controller('users')
export class UsersController {

  @Post()
  createUser(@Body() userInput: CreateUserRequest): UserResponseDTO {
    return new UserResponseDTO(userInput.name, "not-a-real-uuid", new Money(Number.parseFloat(userInput.accountBalance)).toString())
  }
}
