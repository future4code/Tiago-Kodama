import { Request, Response } from "express";
import { MyError } from "../../MyError";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {

    constructor(
        private getAllUsersUseCase: GetAllUsersUseCase
    ){}

    async handle (req: Request, res: Response):Promise<void>{
        try {
            const users = await this.getAllUsersUseCase.execute()

            res.status(200).send(users)

        } catch (error: MyError|Error|any) {
            res.status(error.statusCode || 400).send(error.message || 'unexpected error')
        }
    }
}