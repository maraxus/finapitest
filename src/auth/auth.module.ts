import { Module } from '@nestjs/common';
import { AuthController } from './application/auth.controller';
import { Auth } from './domain/auth';

@Module({
  controllers: [AuthController],
  providers: [Auth]
})
export class AuthModule {}
