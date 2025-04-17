import { Inject, Injectable } from '@nestjs/common';
import { Money } from '../../../core/valueObjects/money';
import { UserUid } from '../../../core/valueObjects/UuidID';
import { User } from '../Entity/User';
import { Wallet } from '../Entity/Wallet';
import { AccountRepositoryInterface, AccountRepositoryToken } from '../Repository/AccountRepositoryInterface';

export type CreatedUser = {
  account: UserUid,
  name: string,
  username: string,
  wallet: {
    balance: Money
  }
}

@Injectable()
export class CreateUser {
  constructor(@Inject("AccountRepositoryInterface") private accountRepository: AccountRepositoryInterface) {}
  async execute(name: string, username: string, password: string, initialBalance: number): Promise<CreatedUser> {
    const user = new User(name, username, password)
    const wallet = new Wallet(user, new Money(initialBalance))
    const saved = await this.accountRepository.register(user, wallet)
    return this.toOutput(saved);
  }

  toOutput(savedAccount: [user: User, wallet: Wallet]): CreatedUser {
    const [user, wallet] = savedAccount
    return {
      account: user.account,
      name: user.name,
      username: user.username,
      wallet: {
        balance: wallet.balance
      }
    }
  }
}
