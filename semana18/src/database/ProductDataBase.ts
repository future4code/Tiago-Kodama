import { Product } from "../entites/Product";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase {
    async insertProduct(product: Product):Promise<void>{
        await this.connection("Products").insert({
            Id: product.id,
            Name: product.name,
            Description: product.description,
            Price: product.price
        })
    }

    async getAllProducts():Promise<Array<Product>|null>{
        const res = await this.connection("Products")

        if(!res || !res.length) return null

        return res.map(e => new Product(
            e.Name,
            e.Description,
            e.Price,
            e.Origin,
            e.Destination,
            e.Id
        ))
    }
}