import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductsController {
  constructor(
    private productsService: ProductsService
  ){}

  @Get('list')
  async getProducts() : Promise<Product[]> {
    return this.productsService.getProducts();
  }
}
