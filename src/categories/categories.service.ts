import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import {CreateCategoryDto} from './dto/create-category.dto'

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository
  ) {}

  async getCategories() : Promise<Category[]> {
    return await this.categoryRepository.find({select: ["id", "name", "description"] });
  }

  async getCategoryById(id: number) : Promise<Category> {
    const category = await this.categoryRepository.findOne(id, {select: ["id", "name", "description"] });

    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found`);
    }

    return category;
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.createCategory(createCategoryDto);
  }

}
