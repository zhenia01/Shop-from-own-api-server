import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository]),
    ProductsModule
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule { }
