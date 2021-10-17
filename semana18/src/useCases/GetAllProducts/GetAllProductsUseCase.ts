import { Product } from "../../entites/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

export class GetAllProductsUseCase {

    constructor(
        private productRepository: IProductsRepository
    ){}

    async execute():Promise<Array<Product>|null>{
        return await this.productRepository.findAll()
    }
}