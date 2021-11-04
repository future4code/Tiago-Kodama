import { Request, Response } from "express";
import { GetPokemonsByPage } from "../business/GetPokemonsByPage";

export class GetPokemonsByParamsController{
    constructor(
        private getPokemonsByPage: GetPokemonsByPage
    ){}

    async handle(req: Request, res: Response): Promise<void>{
        res.statusCode = 400

        try {
            const { offset, limit } = req.query
    
            if(!offset || !limit){
                res.statusCode = 422
                throw new Error('Inform offset and limit')
            }

            if(typeof offset !== 'number' || typeof limit !== 'number'){
                res.statusCode = 422
                throw new Error('Offset and limit have to be a number')
            }

            const pokemons = await this.getPokemonsByPage.execute(offset, limit)

            res.status(200).send({pokemons})
            
        } catch (error: any) {
            res.send(error.sqlMessage || error.message || "Unexpected error")
        }
    }
}