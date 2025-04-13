export class CreateUserRequest {
  constructor(
    public name: string,
    public accountBalance: string
  ){}
}