import { Repository, EntityRepository, Connection, AdvancedConsoleLogger } from "typeorm";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { Category } from "../categories/category.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  
  async createProduct(createProductDto: CreateProductDto, category: Category): Promise<Product> {
    const { name, description, image_url, price, special_price } = createProductDto;

    const product = new Product();

    product.name = name;
    product.description = description;
    product.image_url = image_url;
    product.price = price;
    product.special_price = special_price;
    product.category = category;

    await product.save();

    delete product.category;

    return product;
  }
}
