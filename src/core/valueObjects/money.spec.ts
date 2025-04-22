import { Money } from './money';
import { NegativeBalanceException } from '../exceptions/NegativeBalance';

describe('Money', () => {

  it('on creation, given a negative input, should throw an error', () => {
    expect(() => new Money(-1)).toThrowError(new NegativeBalanceException())
  })

  it('on creation, given a integer number, should create with amount equal to his value in cents', () => {
    const inputStr = 0 //same as 3425.00 or 342500 cents
    const myMoney = new Money(inputStr)
    expect(Number(myMoney.rawAmount())).toBe(inputStr * 100)
  });

  it('on creation, given a float number, should create with amount equal to his value in cents', () => {
    const [inputA, inputB, inputC, inputD, inputE] = [1223.11, 124.56, 124.563, 0.75, 0.7]
    const [myMoneyA, myMoneyB, myMoneyC, myMoneyD, myMoneyE] = [new Money(inputA), new Money(inputB), new Money(inputC), new Money(inputD), new Money(inputE)]
    expect(Number(myMoneyA.rawAmount())).toBe(122311)
    expect(Number(myMoneyB.rawAmount())).toBe(12456)
    expect(Number(myMoneyC.rawAmount())).toBe(12456)
    expect(Number(myMoneyD.rawAmount())).toBe(75)
    expect(Number(myMoneyE.rawAmount())).toBe(70)
  })

  it('should be possible to add more money(integers)', () => {
    const myMoney = new Money(20)
    const creditA = new Money(1)
    const updatedBalance = myMoney.add(creditA)
    expect(Number(updatedBalance.rawAmount())).toBe((20*100)+(100))
  })

  it('should present money as string with two digits to represent cents', () => {
    const myMoney = new Money(38.78)
    const otherMoney = new Money(0.75)
    const moreMoney = new Money(300)
    expect(myMoney.toString()).toBe("38.78")
    expect(otherMoney.toString()).toBe("0.75")
    expect(moreMoney.toString()).toBe("300.00")
  })

  it('should be possible to add more money(floats)', () => {
    const myMoney = new Money(34.46)
    const creditA = new Money(4.3)
    const updatedBalance = myMoney.add(creditA)
    expect(updatedBalance.toString()).toBe("38.76")
  })

  it('should be possible to subtract money from the amount, given a integer', () => {
    const myMoney = new Money(20)
    const debit = new Money(1)
    const updatedAmount = myMoney.take(debit)
    expect(Number(updatedAmount.rawAmount())).toBe(1900)
    expect(updatedAmount.toString()).toBe("19.00")
  })

  it('should be posible to subtract money from the amount, given a float', () => {
    const myMoney = new Money(20.34)
    const debit = new Money(11.1)
    const updatedAmount = myMoney.take(debit)
    expect(Number(updatedAmount.rawAmount())).toBe((20.34 - 11.1) * 100)
    expect(updatedAmount.toString()).toBe("9.24")
  })

  it('given a money amount bigger the current amount to subtract, should throw a error', () => {
    const myMoney = new Money(20)
    const moreMoney = new Money(25)
    expect(() => {myMoney.take(moreMoney)}).toThrowError(NegativeBalanceException)
  })

  it('should compare another money value to respond if it is bigger than, lesser than, or equal', () => {
    const myMoney = new Money(20)
    const lessMoney = new Money(15)
    const moreMoney = new Money(25)
    const otherMoney = new Money(20)
    expect(myMoney.biggerThan(lessMoney)).toBe(true)
    expect(myMoney.lesserThan(moreMoney)).toBe(true)
    expect(myMoney.equal(otherMoney)).toBe(true)
  });
});
