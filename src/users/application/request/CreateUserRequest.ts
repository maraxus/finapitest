import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsNotEmpty()
  @IsString()
  public name: string
  @IsNotEmpty()
  @IsString()
  public username: string
  @IsNotEmpty()
  @IsString()
  public password: string
  @IsNotEmpty()
  @IsNumber()
  public accountBalance: number
}