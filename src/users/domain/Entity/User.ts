import { hashSync } from 'bcrypt';
import { UserUid, UuidID } from '../../../core/valueObjects/UuidID';

export class User {
  public readonly account: UserUid
  public readonly passwordHash
  constructor(
    public readonly name,
    public readonly username,
    password
  ) {
    this.passwordHash = hashSync(password, 16)
    this.account = new UuidID()
  }
}
