import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';

@Controller('order')
export class OrdersController {
  constructor(
    private ordersService: OrdersService
  ){}

  @Post('add')
  async createOrder(@Body(ValidationPipe) createOrderDto: CreateOrderDto) : Promise<Order> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get('list')
  async getOrders() : Promise<Order[]> {
    return this.ordersService.getOrders()
  }
}
