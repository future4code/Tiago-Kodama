import { ProductDataBase } from "../../database/ProductDataBase";
import { Product } from "../../entites/Product";
import { IProductsRepository } from "../IProductsRepository";

export class MySQLProductsRepository implements IProductsRepository{

    private productDataBase: ProductDataBase

    constructor(){
        this.productDataBase = new ProductDataBase()
    }

    async save(product: Product):Promise<void>{
        await this.productDataBase.insertProduct(product)
    }
    async findAll():Promise<Array<Product>|null>{
        return this.productDataBase.getAllProducts()
    }
}