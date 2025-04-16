import { Injectable } from '@nestjs/common';
import { Money } from '../../../core/valueObjects/money';
import { v7 as uuidv7 } from 'uuid';

class UuidID {
  private readonly id
  constructor() {
    this.id = uuidv7({ msecs: Date.now() })
  }
  toString() {
    return this.id.toString()
  }
}

export type UserUid = UuidID
export type WalletUid = UuidID

export type CreatedUser = {
  account: UserUid
  name: string
  username: string
  wallet: {
    walletUid: WalletUid
    balance: Money
  }
}

@Injectable()
export class CreateUser {
  execute(name: string, username: string, password: string, initialBalance: number): Promise<CreatedUser> {

    return Promise.resolve({
      account: new UuidID(),
      name: name,
      username: username,
      wallet : {
        walletUid: new UuidID(),
        balance: new Money(initialBalance)
      }
    });
  }
}
