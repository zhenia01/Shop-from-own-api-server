import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "../categories/category.entity";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Category, category => category.products, {eager: false})
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
}
