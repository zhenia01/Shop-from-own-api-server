import { Injectable, Get, NotFoundException } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '../categories/category.entity';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
    private categoriesService: CategoriesService
  ){}

  async getProducts() : Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductsOfCategoryById(id: number): Promise<Product[]> {

    await this.categoriesService.getCategoryById(id);

    const found = await this.productRepository.find({where: {category: id}});

    if (!found) {
      throw new NotFoundException(`Tasks of category of ID "${id}" not found`);
    }

    return found;
  }

  async getProductById(id: number) : Promise<Product> {
    const found = await this.productRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async createProduct(createProductDto: CreateProductDto, category: Category) : Promise<Product> {
    return this.productRepository.createProduct(createProductDto, category);
  }
}
