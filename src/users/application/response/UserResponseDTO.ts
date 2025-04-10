import { Money } from '../../../core/valueObjects/money';

export class UserResponseDTO {
  name: string
  accountUid: string
  accountBalance: Money
}
