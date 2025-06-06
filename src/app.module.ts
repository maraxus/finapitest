import { Module } from '@nestjs/common';
import { UsersModule } from './users/usersModule';
import { AuthenticationModule } from './authentication/authentication.module';
import { WalletModule } from './wallet/wallet.module';
import { CommonModule } from './common/common.module';
import { CoreModule } from './core/core.module';
import { UsersController } from './users/application/users.controller';
import { CreateUser } from './users/domain/useCase/createUser';

@Module({
  imports: [UsersModule, AuthenticationModule, WalletModule, CommonModule, CoreModule],
  controllers: [UsersController],
  providers: [CreateUser],
})
export class AppModule {}
