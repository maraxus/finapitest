import { User } from '../Entity/User';
import { Wallet } from '../Entity/Wallet';
import { AccountRepositoryInterface } from './AccountRepositoryInterface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountRepository implements AccountRepositoryInterface {
  register(user: User, wallet: Wallet): Promise<[user: User, wallet: Wallet]> {
    return Promise.resolve([user, wallet]);
  }

}