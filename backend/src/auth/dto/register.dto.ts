import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsOptional,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @ApiProperty({ example: "john_doe", description: "Unique username" })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: "john@example.com", description: "Email address" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "John Doe", description: "Full name" })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: "password123",
    description: "Password (min 6 characters)",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: "+1234567890",
    description: "Phone number (optional)",
  })
  @IsString()
  @IsOptional()
  phoneNumber?: string;
}
