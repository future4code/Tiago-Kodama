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