import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
