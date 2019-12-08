import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Post } from "@nestjs/common";
import { Product } from "../products/product.entity";
import { Order } from "./order.entity";

@Entity()
export class OrderToProduct extends BaseEntity {
  @PrimaryGeneratedColumn()
    postToCategoryId!: number;

    @Column()
    orderId!: number;

    @Column()
    productId!: number;

    @Column()
    count!: number;

    @ManyToOne(type => Product, product => product.orderToProduct)
    product!: Product;

    @ManyToOne(type => Order, order => order.orderToProduct)
    order!: Order;
}
