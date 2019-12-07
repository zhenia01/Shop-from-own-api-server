import { Repository, EntityRepository } from "typeorm";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { name, description, image_url, price, special_price } = createProductDto;

    const product = new Product();
    product.name = name;
    product.description = description;
    product.image_url = image_url;
    product.price = price;
    product.special_price = special_price;

    await product.save();

    return product;
  }
}
