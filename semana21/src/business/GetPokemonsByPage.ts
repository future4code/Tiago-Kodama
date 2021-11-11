import { Pokemon } from "../model/Pokemon";
import { IPokemonRepository } from "../repository/IPokemonRepository";

export class GetPokemonsByPage {
    constructor(
        private pokemonRepository: IPokemonRepository
    ){}

    async execute(offset: number, limit: number):Promise<Array<Pokemon>|null>{
        return await this.pokemonRepository.findByPage(offset, limit)
    }
}