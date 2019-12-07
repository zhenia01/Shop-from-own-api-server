import { IsNotEmpty, IsEmail, IsPhoneNumber, MinLength, MaxLength, ValidateNested, ArrayMinSize, IsArray, IsInstance, IsNumber, IsPositive } from "class-validator";
import { Type } from 'class-transformer';

export class ProductMap{
  @IsNumber()
  id!: number;

  @IsNumber()
  @IsPositive()
  count!: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  name!: string;

  @IsNotEmpty()
  @IsPhoneNumber("UA")
  phone!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsArray()
  @ValidateNested({each: true})
  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => ProductMap)
  products!: ProductMap[];
}
