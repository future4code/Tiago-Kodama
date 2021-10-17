import { Product } from "../entites/Product";

export interface IProductsRepository {
    save(product: Product):Promise<void>;
}