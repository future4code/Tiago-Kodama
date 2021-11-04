import { Pokemon } from "../model/Pokemon";
import { IPokemonRepository } from "../repository/IPokemonRepository";

export class GetPokemonById {
    constructor(
        private pokemonRepository: IPokemonRepository
    ){}

    async execute(id: string):Promise<Pokemon|null>{
        return await this.pokemonRepository.findById(id)
    }
}