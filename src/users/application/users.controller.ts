import { Controller, Post } from '@nestjs/common';
import { UserResponseDTO } from './response/UserResponseDTO';
import { Money } from '../../core/valueObjects/money';

@Controller('users')
export class UsersController {

  @Post()
  createUser(): UserResponseDTO {
    const user = new UserResponseDTO()
    user.name = "Waldo Banana"
    user.accountUid = "not-a-real-uuid"
    user.accountBalance = new Money(234.34)
    return user
  }
}
