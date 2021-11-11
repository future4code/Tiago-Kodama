import { Pokemon } from "../model/Pokemon";
import { IPokemonRepository } from "../repository/IPokemonRepository";

export class GetPokemons {
    constructor(
        private pokemonRepository: IPokemonRepository
    ){}

    async execute():Promise<Array<Pokemon>|null>{
        return await this.pokemonRepository.findAll()
    }
}