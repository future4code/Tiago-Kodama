import { BaseDataBase } from "./BaseDataBase";

export class Migrations extends BaseDataBase {
    execute = async () => {
        try {
            await this.up()
            console.log('CREATE TABLES')
        } catch (error: any) {
            console.log(error.sqlMessage || error.message || error)
            await this.down()
            console.log('REMOVE TABLES')
        } finally {
            this.close()
        }
    }

    up = async () => {
        await BaseDataBase.connection.raw(`
        CREATE TABLE IF NOT EXISTS Pokemon (
            Id varchar(255) unique primary key,
            PokemonNumber int,
            Name varchar(255),
            Generation int,
            Evolved int,
            FamilyID int,
            CrossGen int,
            STATTOTAL int,
            ATK int,
            DEF int,
            STA int,
            Legendary int,
            Aquireable int,
            Spawns int,
            Regional int,
            Raidable int,
            Hatchable int,
            Shiny int,
            Nest int,
            New int,
            FutureEvolve int
          );      
        `)

        await BaseDataBase.connection.raw(`       
          CREATE TABLE IF NOT EXISTS  TypePokemon (
            Id_Pokemon varchar(255),
            Type varchar(255),
            foreign key (Id_Pokemon) references Pokemon(Id)
          );
        `)

        await BaseDataBase.connection.raw(`
          CREATE TABLE IF NOT EXISTS WeatherPokemon (
            Id_Pokemon varchar(255),
            Weather varchar(255),
            foreign key (Id_Pokemon) references Pokemon(Id)
          );
        `)
    }

    down = async () => {
        await BaseDataBase.connection.raw(`
            DROP TABLES WeatherPokemon, TypePokemon, Pokemon;
        `)
    }
}