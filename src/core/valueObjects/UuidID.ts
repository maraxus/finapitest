import { v7 as uuidv7, validate as uuidValidate} from 'uuid';

export const INVALID_UUID_ERROR = "invalid_uuid"
class InvalidUUID implements Error {
  constructor() {}
  message: string = 'tried to create a uuid from a invalid uuid string';
  name: "INVALID_UUID";
}

export class UuidID {
  private readonly id
  private constructor(id: string) {
    this.id = id
  }
  toString() {
    return this.id.toString()
  }

  public static fromString(id: string) {
    if(!uuidValidate(id)) throw new InvalidUUID()
    return new UuidID(id)
  }

  public static generate(): UuidID {
    return new UuidID(uuidv7({ msecs: Date.now() }))
  }
}

export type UserUid = UuidID
export type WalletUid = UuidID
