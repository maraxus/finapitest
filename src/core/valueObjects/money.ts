import { NegativeBalanceException } from '../exceptions/NegativeBalance';

export class Money {
  private readonly amount: bigint
  constructor(value: number | bigint) {
    if (typeof value == 'bigint') {
      this.amount = value
      return
    }
    if (value < 0) {
      throw new NegativeBalanceException()
    }
    this.amount = BigInt(Math.round(Number.parseFloat(value.toFixed(2)) * 100));
  }

  toString() {
    return (Number(this.amount) / 100).toFixed(2)
  }

  rawAmount() {
    return this.amount
  }

  add(other: Money) {
    const newValue = this.rawAmount() + other.rawAmount()
    return new Money(Number(newValue) / 100)
  }
  take(value: Money) {
    if (this.biggerThan(value)) {
      const newValue = this.amount - value.rawAmount()
      return new Money(Number(newValue) / 100)
    } else {
      throw new NegativeBalanceException()
    }
  }

  equal(other: Money): boolean {
    return this.amount == other.rawAmount();
  }

  biggerThan(other: Money): boolean {
    return this.amount > other.rawAmount()
  }

  lesserThan(other: Money): boolean { return this.amount < other.rawAmount()}
}