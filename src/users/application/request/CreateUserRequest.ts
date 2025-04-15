export class CreateUserRequest {
  constructor(
    public name: string,
    public username: string,
    public password: string,
    public accountBalance: string
  ){}
}