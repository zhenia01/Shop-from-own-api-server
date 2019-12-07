import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, Body, ValidationPipe, forwardRef, Inject } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoriesService } from '../categories/categories.service';

@Controller('product')
export class ProductsController {
  constructor(
    // @Inject(forwardRef(() => ProductsService))
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) { }

  @Post()
  @UsePipes(ValidationPipe)
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @Body('category') categoryId: number
  ): Promise<Product> {

    const category = await this.categoriesService.getCategoryById(categoryId);

    return this.productsService.createProduct(createProductDto, category);
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
