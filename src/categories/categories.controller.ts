import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body} from '@nestjs/common';
import { Category } from './category.entity';
import { CategoriesService } from './categories.service'
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) { }

  @Get('list')
  async getCategories(): Promise<Category[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoriesService.getCategoryById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryDto);
  }

}
