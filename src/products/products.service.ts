import { Injectable, Get } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository
  ){}

  async getProducts() : Promise<Product[]> {
    return this.productRepository.find();
  }
}
