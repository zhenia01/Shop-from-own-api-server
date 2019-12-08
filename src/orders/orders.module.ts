import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';
import { ProductsModule } from '../products/products.module';
import { OrderToProductRepository } from './order-to-product.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderRepository, OrderToProductRepository]),
    ProductsModule
  ],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
