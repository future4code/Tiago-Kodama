import { Pokemon } from "../model/Pokemon";
import { IPokemonRepository } from "../repository/IPokemonRepository";

export class GetPokemonsByParams {
    constructor(
        private pokemonRepository: IPokemonRepository
    ){}

    async execute(param: string, value: string):Promise<Array<Pokemon>|null>{
        return await this.pokemonRepository.findByParam(param, value)
    }
}