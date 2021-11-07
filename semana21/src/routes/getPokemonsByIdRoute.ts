import { Request, Response, Router } from 'express'
import { GetPokemonById } from '../business/GetPokemonById'
import { GetPokemonByIdController } from '../controller/GetPokemonByIdController'
import { PokemonRepository } from '../repository/PokemonRepository'

const router = Router()

const pokemonRepository = new PokemonRepository()
const getPokemonById = new GetPokemonById(pokemonRepository)
const getPokemonByIdController = new GetPokemonByIdController(getPokemonById)

router.get('/:id', (req:Request, res:Response) => {
    getPokemonByIdController.handle(req, res)
})

export default router