import { NegativeBalanceException } from '../exceptions/NegativeBalance';

export class Money {
  private readonly amount: number
  constructor(value: number) {
    if (Number.isInteger(value)) {
      this.amount = value
    } else {
      this.amount = Number.parseFloat(value.toFixed(2)) * 100;
    }
  }

  toString() {
    return this.amount.toFixed(2)
  }

  rawAmount() {
    return this.amount
  }

  add(value: Money) {
    return new Money(Number(this.amount + value.rawAmount())
    )
  }
  take(value: Money) {
    if (this.lesserThan(value)) {
      new Money((this.amount - value.rawAmount()))
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