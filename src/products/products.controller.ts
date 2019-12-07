import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, Body, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductsController {
  constructor(
    private productsService: ProductsService
  ) { }

  @Post()
  @UsePipes(ValidationPipe)
  async createProduct(@Body() createProductDto: CreateProductDto) : Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @Get('list')
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.getProductById(id);
  }

}
