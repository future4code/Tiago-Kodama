import { Request, Response, Router } from 'express'
import { GetPokemons } from '../business/GetPokemons'
import { GetPokemonsController } from '../controller/GetPokemonsController'
import { PokemonRepository } from '../repository/PokemonRepository'

const router = Router()

const pokemonRepository = new PokemonRepository()
const getPokemons = new GetPokemons(pokemonRepository)
const getPokemonsController = new GetPokemonsController(getPokemons)

router.get('/', (req:Request, res:Response) => {
    getPokemonsController.handle(req, res)
})

export default router