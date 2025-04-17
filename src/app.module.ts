import { Module } from '@nestjs/common';
import { UsersModule } from './users/usersModule';
import { AuthenticationModule } from './authentication/authentication.module';
import { WalletModule } from './wallet/wallet.module';
import { CommonModule } from './common/common.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [UsersModule, AuthenticationModule, WalletModule, CommonModule, CoreModule]
})
export class AppModule {}
