import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, Body, ValidationPipe, forwardRef, Inject, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoryInterceptor } from './product.interceptor';
import { Category } from '../categories/category.entity';

@Controller('product')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
  ) { }

  @Post()
  @UsePipes(ValidationPipe)
  @UseInterceptors(CategoryInterceptor)
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @Body('categoryObj') category: Category
  ): Promise<Product> {
    return this.productsService.createProduct(createProductDto, category);
  }

  @Get('/list/category/:id')
  async getProductsOfCategoryById(@Param('id', ParseIntPipe) id: number): Promise<Product[]> {
    return this.productsService.getProductsOfCategoryById(id);
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
