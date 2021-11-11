import { Request, Response } from "express";
import { GetPokemonsByParams } from "../business/GetPokemonsByParams";

export class GetPokemonsByParamsController{
    constructor(
        private getPokemonsByParams: GetPokemonsByParams
    ){}

    async handle(req: Request, res: Response): Promise<void>{
        res.statusCode = 400

        try {
            const params = req.query

            if(!Object.keys(params) || !Object.keys(params).length){
                res.statusCode = 400
                throw new Error("Please, inform param and value")
            }

            const param = Object.keys(params)[0]
            const value = Number(Object.values(params)[0])

            if(typeof value !== 'number'){
                res.statusCode = 422
                throw new Error('Value has to be number')
            }

            const pokemons = await this.getPokemonsByParams.execute(param, value)

            res.status(200).send({pokemons})
            
        } catch (error: any) {
            res.send(error.sqlMessage || error.message || "Unexpected error")
        }
    }
}