import { PokemonRepository } from "../repository/PokemonRepository"
import { GetPokemons } from "./GetPokemons"

describe('Get all pokemons', () => {
    const pokemonRepository = new PokemonRepository()
    const getPokemons = new GetPokemons(pokemonRepository)

    test('Exists', async () => {
        let result: any = null
        try {
            result = await getPokemons.execute()

        } catch (error) {
            result = null
        } finally {
            expect(result).not.toBe(null)
        }
    })

    test('There are length', async () => {
        let length: any = 0
        try {
            const result = await getPokemons.execute()
            
            if(!result) throw new Error()
            
            length = result.length

        } catch (error) {
            length = 0

        } finally {
            expect(length).not.toBe(0)
        }
    })
})