import {IsEmail, IsNotEmpty, IsString, Matches} from 'class-validator';

export class PasswordHashDto {
    @IsNotEmpty()
    @Matches(
        new RegExp("^0x[a-fA-F0-9]{40}$"),
        {
            message: "Address must be valid Ethereum address"
        }
    )
    public readonly address: string;

    @IsNotEmpty()
    @IsString()
    public readonly privateKey: string;

    @IsNotEmpty()
    @IsString()
    public readonly passwordHash: string;
}
