import { IsNotEmpty, IsOptional, IsUrl, IsPositive, IsNumberString, IsNumber, MinLength, MaxLength } from "class-validator";

export class CreateProductDto {

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  name!: string;

  @IsNotEmpty()
  @MinLength(5)
  description!:string;

  @IsNotEmpty()
  @IsUrl()
  image_url!:string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price!: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  special_price!: number;
}
