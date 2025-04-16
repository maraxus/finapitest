import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export const MAX_ACCOUNT_BALANCE = 9_999_999_999;

export class CreateUserRequest {
  @IsNotEmpty({ message: "name should not be empty" })
  @IsString({ message:'name should be a valid JSON format string' })
  @MinLength(4, { message: "name should have at least 4 characters"})
  @MaxLength(60, { message: "should have no more than 60 characters"})
  public name: string
  @IsNotEmpty({ message: "username should not be empty" })
  @IsString({ message:'username should be a valid JSON format string' })
  @MinLength(4, { message: "name should have at least 4 characters"})
  @MaxLength(50, { message: "should have no more than 60 characters"})
  public username: string
  @IsNotEmpty({ message: "password should not be empty" })
  @IsString({ message:'password should be a valid JSON format string' })
  @MinLength(8, { message: "please provide a strong password with no less than 8 characters"})
  @MaxLength(256, { message: "should have no more than 256 characters"})
  public password: string
  @IsNotEmpty({ message: "accountBalance should not be empty" })
  @IsNumber({}, { message: "accountBalance should be a valid JSON number, representing you initial account ballance like 233.50 or just 233" })
  @Min(0,{ message: "You cannot give your account a negative balance, the lowest possible value is zero 0"})
  @Max(MAX_ACCOUNT_BALANCE, { message: `The maximum value permitted for your account is ${MAX_ACCOUNT_BALANCE}` })
  public accountBalance: number
}