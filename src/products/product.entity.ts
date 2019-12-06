import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  
  @Column()
  description!: string;
  
  @Column()
  image_url!: string;

  @Column('real')
  price!: number
  
  @Column({
    type: "real",
    nullable: true
  })
  special_price!: number
}
