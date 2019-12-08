import { IsNotEmpty, IsEmail, IsPhoneNumber, MinLength, MaxLength, ValidateNested, ArrayMinSize, IsArray, IsInstance, IsNumber, IsPositive, IsObject, IsNumberString } from "class-validator";
import { Type } from 'class-transformer';

export class ProductMap{
  // @IsNumberString()
  id!: number;

  // @IsNumberString()
  // @IsPositive()
  count!: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  name!: string;

  // @IsPhoneNumber("UA")
  @IsNotEmpty()
  phone!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  // @IsObject()
  // @IsInstance(ProductMap)
  // @IsNotEmpty()
  // @ValidateNested({each: true})
  // @Type(() => ProductMap)
  @IsArray()
  @ValidateNested({each: true})
  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => ProductMap)
  products!: ProductMap[];
}
