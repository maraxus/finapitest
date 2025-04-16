import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsNotEmpty({ message: "name should not be empty" })
  @IsString({ message:'name should be a valid JSON format string' })
  public name: string
  @IsNotEmpty({ message: "username should not be empty" })
  @IsString({ message:'username should be a valid JSON format string' })
  public username: string
  @IsNotEmpty({ message: "password should not be empty" })
  @IsString({ message:'password should be a valid JSON format string' })
  public password: string
  @IsNotEmpty({ message: "accountBalance should not be empty" })
  @IsNumber({}, { message: "accountBalance should be a valid JSON number, representing you initial account ballance like 233.50 or just 233" })
  public accountBalance: number
}