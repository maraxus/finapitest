import { User } from '../Entity/User';
import { Wallet } from '../Entity/Wallet';
import { AccountRepositoryInterface } from './AccountRepositoryInterface';
import { Injectable } from '@nestjs/common';
import { Column, DataSource, Entity, JoinColumn, OneToOne, PrimaryColumn, Relation } from 'typeorm';
import { Money } from '../../../core/valueObjects/money';

@Injectable()
export class AccountRepository implements AccountRepositoryInterface {
  private userRepository
  private walletRepository;
  constructor(ds: DataSource) {
    this.userRepository = ds.getRepository(UserDAO)
    this.walletRepository = ds.getRepository(WalletDAO)
  }
  async register(user: User, wallet: Wallet): Promise<[user: User, wallet: Wallet]> {
    const userDAO = new UserDAO()
    userDAO.name = user.name
    userDAO.username = user.username
    userDAO.password = user.passwordHash
    userDAO.userId = user.account.toString()
    const walletDAO = new WalletDAO()
    walletDAO.walletUid = wallet.id.toString()
    walletDAO.balance = wallet.balance.rawAmount()
    walletDAO.user = userDAO
    userDAO.wallet = walletDAO
    const savedUser = await this.walletRepository.save(walletDAO)
    return this.formatOutput(savedUser);
  }

  formatOutput({ user, ...wallet }: WalletDAO): [user: User, wallet: Wallet] {
    const hydratedUser = User.fromPersistence(user.name, user.username, user.password, user.userId)
    const hydratedWallet = Wallet.fromPersistence(hydratedUser, new Money(wallet.balance), wallet.walletUid)
    return [hydratedUser, hydratedWallet]
  }

}
@Entity({ name: "users" })
export class UserDAO {
  @PrimaryColumn('uuid', { name: "useruid", update: false })
  userId: string
  @Column('varchar', { length:60 })
  name: string
  @Column('varchar', { length:50 })
  username: string
  @Column('varchar', { length:300, })
  password: string
  @OneToOne(() => WalletDAO)
  wallet: Relation<WalletDAO>
}
@Entity({ name: "wallets" })
export class WalletDAO {
  @PrimaryColumn('uuid', {name: "walletuid", update: false})
  walletUid: string
  @Column('int', {name:'balance'})
  balance: bigint
  @OneToOne(() => UserDAO, {cascade: true})
  @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
  user: Relation<UserDAO>
}