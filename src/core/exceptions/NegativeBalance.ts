export class NegativeBalanceException implements Error {
  message: string;
  statusCode: number;
  name: string = 'NEAGATIVE_BALANCE '

  constructor() {
    this.message = "Tried to make a Money permutation which resulted in a negative balance. 0 is the minimum valid amount"
    this.statusCode = 500
  }
}