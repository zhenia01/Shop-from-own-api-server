import { IsNotEmpty, IsOptional, IsUrl, IsNumber, IsPositive } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
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
