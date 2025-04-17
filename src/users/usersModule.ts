import { Module } from '@nestjs/common';
import { UsersController } from './application/users.controller';
import { CreateUser } from './domain/useCase/createUser';
import { AccountRepository } from './domain/Repository/AccountRepository';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: "AccountRepositoryInterface",
      useClass: AccountRepository
    },
    CreateUser
  ]
})
export class UsersModule {}
