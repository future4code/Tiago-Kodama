import { PokemonRepository } from "./PokemonRepository"

describe('Pokemon Repository', () => {
    test('Find all', async () => {
        const pokemonRepository = new PokemonRepository()
        const pokemons = await pokemonRepository.findAll()
        expect(pokemons).not.toBe(null)
    })
    
    test('Find by id', async () => {
        const pokemonRepository = new PokemonRepository()
        const pokemons = await pokemonRepository.findById('031985aa-21e5-45d9-ae01-f35386998ffa')
        expect(pokemons).not.toBe(null)
    })
    
    test('Find by param', async () => {
        const pokemonRepository = new PokemonRepository()
        const pokemons = await pokemonRepository.findByParam( 'Id','0041bbba-f065-44ab-baf3-9f3ce8c9704b')
        expect(pokemons).not.toBe(null)
    })
    
    test('Find by page', async () => {
        const pokemonRepository = new PokemonRepository()
        const pokemons = await pokemonRepository.findByPage( 5, 20)
        expect(pokemons).not.toBe(null)
        pokemonRepository.close()
    })    
})