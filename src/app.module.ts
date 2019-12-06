import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductModule } from './product/product.module';
@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
