import { Request, Response } from "express";
import { MyError } from "../../MyError";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

export class GetAllProductsController {

    constructor(
        private getAllProductsUseCase: GetAllProductsUseCase
    ){}

    async handle(req: Request, res:Response):Promise<void>{
        try {

            const products = await this.getAllProductsUseCase.execute()

            res.status(200).send(products)

        } catch (error: MyError|Error|any) {
            res.status(error.statusCode || 400).send(error.message || 'unexpected error')
        }
    }
}