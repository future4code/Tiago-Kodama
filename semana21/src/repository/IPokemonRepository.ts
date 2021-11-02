import { Pokemon } from "../model/Pokemon";

export interface IPokemonRepository {
    
    findAll():Promise<Array<Pokemon>|null>;
    findById(id: string):Promise<Pokemon|null>;
    findByPage(offset: number, limit: number):Promise<Array<Pokemon>|null>;
    findByParam(param: string, value: string):Promise<Array<Pokemon>|null>;
}