import { IsString, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({
    example: "john_doe",
    description: "Username, email or phone number",
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: "password123", description: "User password" })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
