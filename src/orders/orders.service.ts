import { Injectable, Body, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './order.repository';
import { CreateOrderDto, ProductMap } from './dto/create-order.dto';
import { Order } from './order.entity';
import { ProductsService } from '../products/products.service';
import { OrderToProductRepository } from './order-to-product.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderRepository)
    private orderRepository: OrderRepository,
    private productsService: ProductsService,
    @InjectRepository(OrderToProductRepository)
    private orderToProductRepository: OrderToProductRepository
  ) { }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = await this.orderRepository.createOrder(createOrderDto);
    for (const {id, count} of createOrderDto.products) {
      const product = await this.productsService.getProductById(id);
      await this.orderToProductRepository.createOrderToProduct(product, order, count);
    }

    return order;
  }
}
