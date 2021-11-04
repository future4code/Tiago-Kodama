import { Request, Response } from "express";
import { GetPokemons } from "../business/GetPokemons";

export class GetPokemonsController{
    constructor(
        private getPokemons: GetPokemons
    ){}

    async handle(req: Request, res: Response): Promise<void>{
        res.statusCode = 400

        try {
            const pokemons = await this.getPokemons.execute()

            res.status(200).send({pokemons})
            
        } catch (error: any) {
            res.send(error.sqlMessage || error.message || "Unexpected error")
        }
    }
}