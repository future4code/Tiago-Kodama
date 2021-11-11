import { Request, Response } from "express";
import { GetPokemonById } from "../business/GetPokemonById";

export class GetPokemonByIdController{
    constructor(
        private getPokemonById: GetPokemonById
    ){}

    async handle(req: Request, res: Response): Promise<void>{
        res.statusCode = 400

        try {
            const id = req.params.id

            if(!id){
                res.statusCode = 404
                throw new Error("Not found pokemon")
            }

            const pokemon = await this.getPokemonById.execute(id)

            res.status(200).send({pokemon})
            
        } catch (error: any) {
            res.send(error.sqlMessage || error.message || "Unexpected error")
        }
    }
}