import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Category } from './category.entity';
import {CategoriesService} from './categories.service'

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('list')
  async getCategories(): Promise<Category[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id', ParseIntPipe) id: number) : Promise<Category> {
    return this.categoriesService.getCategoryById(id);
  }

}
