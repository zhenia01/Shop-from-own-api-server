import { Injectable, Get, NotFoundException } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository
  ){}

  async getProducts() : Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(id: number) : Promise<Product> {
    const found = await this.productRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async createProduct(createProductDto: CreateProductDto) : Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }
}
