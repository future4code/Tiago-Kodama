import { BaseDataBase } from "../database/BaseDataBase";
import { Pokemon } from "../model/Pokemon";
import { IPokemonRepository } from "./IPokemonRepository";

export class PokemonRepository
  extends BaseDataBase
  implements IPokemonRepository
{
  async findAll(): Promise<Array<Pokemon> | null> {
    try {
      return await BaseDataBase.connection("Pokemon")
        .innerJoin('TypePokemon', 'Pokemon.Id', 'TypePokemon.Id_Pokemon')
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message || "Database failed");
    }
  }

  async findById(id: string): Promise<Pokemon | null> {
    try {
      const pokemons = await BaseDataBase.connection<Pokemon>("Pokemon").where("Id", id)
      const types = await BaseDataBase.connection('TypePokemon').select('Type').where("Id_Pokemon", id)
      const weathers = await BaseDataBase.connection('WeatherPokemon').select('Weather').where("Id_Pokemon", id)
      const pokemon = pokemons[0]

      pokemon.Types = []
      pokemon.Weather = []
      types.forEach(type => pokemon.Types?.push(type.Type))
      weathers.forEach(weather => pokemon.Weather?.push(weather.Weather))
      return pokemon

    } catch (error: any) {
      throw new Error("Incorrect id");
    }
  }

  async findByPage(
    offset: number,
    limit: number
  ): Promise<Array<Pokemon> | null> {
    try {
      return await BaseDataBase.connection("Pokemon")
        .limit(limit)
        .offset(offset);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message || "Database failed");
    }
  }

  async findByParam(
    param: string,
    value: number
  ): Promise<Array<Pokemon> | null> {
    try {
      const pokemons = await BaseDataBase.connection("Pokemon").where(
        param,
        value
      );
      return pokemons;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message || "Database failed");
    }
  }
}
