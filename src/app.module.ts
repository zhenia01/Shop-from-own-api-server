import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductsModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
