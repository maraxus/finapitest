import { hashSync } from 'bcrypt';
import { UserUid, UuidID } from '../../../core/valueObjects/UuidID';

export class User {
  public readonly account: UserUid
  public readonly passwordHash

  private constructor(
    public readonly name: string,
    public readonly username: string,
    passwordHash: string,
    account?: string,
  ) {
    this.passwordHash = passwordHash
    this.account = account ? UuidID.fromString(account) : UuidID.generate()
  }

  public static create(name: string, username: string, password): User {
    const passwordHash = hashSync(password, 16)
    return new User(name, username, passwordHash)
  }

  public static fromPersistence(name: string, username: string, passwordHash: string, account:string): User {
    return new User(name, username, passwordHash, account)
  }
}
