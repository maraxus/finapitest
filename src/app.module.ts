import { Module } from '@nestjs/common';
import { UsersModule } from './users/usersModule';
import { AuthenticationModule } from './authentication/authentication.module';
import { WalletModule } from './wallet/wallet.module';
import { CommonModule } from './common/common.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { UserDAO, WalletDAO } from './users/domain/Repository/AccountRepository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'wallet',
      password: process.env.PGDBPASS,
      database: 'walletdb',
      entities: [UserDAO, WalletDAO],
      synchronize: false
    }),
    UsersModule, AuthenticationModule, WalletModule, CommonModule, CoreModule]
})
export class AppModule {}
