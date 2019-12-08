import { Repository, EntityRepository } from "typeorm";
import { Order } from "./order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Product } from "../products/product.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { name, phone, email } = createOrderDto;

    const order = new Order();

    order.name = name;
    order.phone = phone;
    order.email = email;

    await order.save();

    return order;
  }
}
