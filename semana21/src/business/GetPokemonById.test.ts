import { PokemonRepository } from "../repository/PokemonRepository"
import { GetPokemonById } from "./GetPokemonById"

describe('Get all pokemons', () => {
    const pokemonRepository = new PokemonRepository()
    const getPokemonById = new GetPokemonById(pokemonRepository)

    test('Exists', async () => {
        let result: any = null
        try {
            result = await getPokemonById.execute('031985aa-21e5-45d9-ae01-f35386998ffa')

        } catch (error) {
            result = null
        } finally {
            expect(result).not.toBe(null)
        }
    })

    test('There are pokeon', async () => {
        let id: any = '031985aa-21e5-45d9-ae01-f35386998ffa'
        let result: any = null

        try {
            result = await getPokemonById.execute(id)
            
            if(!result || !Object.keys(result)) throw new Error()

        } catch (error) {
            result = null

        } finally {
            expect(result.Id).toBe(id)
            pokemonRepository.close()
        }
    })
})