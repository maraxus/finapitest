import { Module } from '@nestjs/common';
import { UsersModule } from './users/usersModule';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [UsersModule, AuthModule, WalletModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
