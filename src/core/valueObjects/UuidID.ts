import { v7 as uuidv7 } from 'uuid';

export class UuidID {
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
