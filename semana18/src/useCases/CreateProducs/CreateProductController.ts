import { Request, Response } from "express";
import { MyError } from "../../MyError";
import { ICreateProductsDTO } from "./CreateProductsDTO";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

export class CreateProductController {

    constructor(
        private createProductsUseCase: CreateProductsUseCase
    ){}

    async handle(req: Request, res: Response): Promise<void>{
        try {
            const {
                name,
                description,
                price
            } = req.body

            if(!name || typeof name !== 'string') throw new MyError('Missing name', 402)
            else if(!description) throw new MyError("Missing description", 402)
            else if(!price || typeof price !== 'number') throw new MyError("Missing price", 402)

            const product: ICreateProductsDTO = {
                name,
                description,
                price
            }

            await this.createProductsUseCase.execute(product)

            res.status(201).end()

        } catch (error: MyError|Error|any) {
            res.status(error.statusCode || 400).send(error.message || 'unexpected error')
        }
    }
}