import { Product } from "../../entites/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { ICreateProductsDTO } from "./CreateProductsDTO";

export class CreateProductsUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(data: ICreateProductsDTO): Promise<void> {
    const product = new Product(
      data.name,
      data.description,
      data.price,
      data.origin,
      data.destination
    );

    this.productRepository.save(product);
  }
}
