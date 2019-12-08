import { OrderToProduct } from "./order-to-product.entity";
import { Repository, EntityRepository } from "typeorm";
import { Product } from "../products/product.entity";
import { Order } from "./order.entity";

@EntityRepository(OrderToProduct)
export class OrderToProductRepository extends Repository<OrderToProduct> {
  async createOrderToProduct(product: Product, order: Order, count: number) {
    const orderToProduct = new OrderToProduct();
    orderToProduct.count = count;
    orderToProduct.order = order;
    orderToProduct.product = product;

    await orderToProduct.save();
  }
}
