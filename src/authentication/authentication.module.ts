import { Module } from '@nestjs/common';
import { AuthenticationController } from './application/authentication.controller';
import { Authentication } from './domain/authentication';

@Module({
  controllers: [AuthenticationController],
  providers: [Authentication]
})
export class AuthenticationModule {}
