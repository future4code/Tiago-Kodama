import { BaseDataBase } from "./BaseDataBase";
import data from "./pokemons.json";
import { v4 as uuid } from 'uuid'

export class Seed extends BaseDataBase {
  execute = async () => {
    try {
      await this.up();
      console.log("INSERT VALUES");
    } catch (error: any) {
      console.log(error.sqlMessage || error.message || error);
      await this.down();
      console.log("REMOVE VALUES");
    } finally {
      this.close();
    }
  };

  up = async () => {
    for (const pokemon of data) {
        const id = uuid()

      await BaseDataBase.connection("Pokemon").insert({
        Id: id,
        PokemonNumber: pokemon["Pokedex Number"],
        Name: pokemon["Name"],
        Generation: pokemon["Generation"],
        Evolved: pokemon["Evolved"],
        FamilyID: pokemon["FamilyID"],
        CrossGen: pokemon["Cross Gen"],
        STATTOTAL: pokemon["STAT TOTAL"],
        ATK: pokemon["ATK"],
        DEF: pokemon["DEF"],
        STA: pokemon["STA"],
        Legendary: pokemon["Legendary"],
        Aquireable: pokemon["Aquireable"],
        Spawns: pokemon["Spawns"],
        Regional: pokemon["Regional"],
        Raidable: pokemon["Raidable"],
        Hatchable: pokemon["Hatchable"],
        Shiny: pokemon["Shiny"],
        Nest: pokemon["Nest"],
        New: pokemon["New"],
        FutureEvolve: pokemon["Future Evolve"],
      });

      const types = Object.keys(pokemon).filter((key) => key.includes("Type"));

      await Promise.all(
        types.map(async (type) => {
          return await BaseDataBase.connection("TypePokemon").insert({
            Id_Pokemon: id,
            Type: pokemon[type],
          });
        })
      );

      const weathers = Object.keys(pokemon).filter((key) =>
        key.includes("Weather")
      );

      await Promise.all(
        weathers.map(async (weather) => {
          return await BaseDataBase.connection("WeatherPokemon").insert({
            Id_Pokemon: id,
            Weather: pokemon[weather],
          });
        })
      );

      console.log(`INSERTED ${pokemon["Pokedex Number"]} - ${pokemon["Name"]}`)
    }
  };

  down = async () => {
    await BaseDataBase.connection.raw(`
        delete from WeatherPokemon;
        `);
    await BaseDataBase.connection.raw(`
        delete from TypePokemon;
        `);
    await BaseDataBase.connection.raw(`
        delete from Pokemon;
        `);
  };
}
