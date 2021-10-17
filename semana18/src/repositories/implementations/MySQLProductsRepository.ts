import { Product } from "../../entites/Product";
import { IProductsRepository } from "../IProductsRepository";

export class MySQLProductsRepository implements IProductsRepository{
    async save(product: Product):Promise<void>{
        console.log('Salvando', product)
    }
}