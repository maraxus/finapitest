import { User } from '../Entity/User';
import { Wallet } from '../Entity/Wallet';
export const AccountRepositoryToken = Symbol("AccountRepositoryInterface")
export interface AccountRepositoryInterface {
  register(user: User, wallet: Wallet): Promise<[user: User, wallet: Wallet]>
}
