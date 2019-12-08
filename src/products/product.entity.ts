import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Category } from "../categories/category.entity";
import { OrderToProduct } from "../orders/order-to-product.entity";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Category, category => category.products, {cascade: true })
  category!: Category;

  @Column()
  name!: string;
  
  @Column()
  description!: string;
  
  @Column()
  image_url!: string;

  @Column('double precision')
  price!: number
  
  @Column({
    type: "double precision",
    nullable: true
  })
  special_price!: number

  @OneToMany(type => OrderToProduct, orderToProduct => orderToProduct.product, {cascade: true })
  orderToProduct!: OrderToProduct[];
}
