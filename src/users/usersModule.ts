import { Module } from '@nestjs/common';
import { UsersController } from './application/users.controller';
import { CreateUser } from './domain/useCase/createUser';

@Module({
  controllers: [UsersController],
  providers: [CreateUser]
})
export class UsersModule {}
