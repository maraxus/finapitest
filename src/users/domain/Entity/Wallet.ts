import { Money } from '../../../core/valueObjects/money';
import { UserUid, UuidID, WalletUid } from '../../../core/valueObjects/UuidID';
import { User } from './User';

export class Wallet {
  public readonly owner: UserUid
  public readonly id: WalletUid
  private constructor(user: User, public readonly balance: Money, id?: string) {
    this.id = id ? UuidID.fromString(id) :  UuidID.generate()
    this.owner = user.account
  }

  public static create(user: User, balance: Money): Wallet {
    return new Wallet(user, balance)
  }

  public static fromPersistence(user: User, balance: Money, id: string): Wallet {
    return new Wallet(user, balance, id);
  }
}
