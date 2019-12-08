import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Entity, OneToMany } from "typeorm";
import { Product } from "../products/product.entity";
import { OrderToProduct } from "./order-to-product.entity";

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @OneToMany(type => OrderToProduct, orderToProduct => orderToProduct.order, {eager: true, cascade: true})
  orderToProduct!: OrderToProduct[];
}
