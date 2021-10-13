import { Min, Max, Length, IsEmail, IsString } from "class-validator";

export class User {
    @IsEmail()
    private readonly email: string;

    @IsString()
    @Length(1, 10)
    private readonly nickname: string;
}