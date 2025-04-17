import { Money } from '../../../core/valueObjects/money';
import { UserUid, UuidID, WalletUid } from '../../../core/valueObjects/UuidID';
import { User } from './User';

export class Wallet {
  public readonly owner: UserUid
  public readonly id: WalletUid
  constructor(user: User, public readonly balance: Money) {
    this.id = new UuidID()
    this.owner = user.account
  }
}
