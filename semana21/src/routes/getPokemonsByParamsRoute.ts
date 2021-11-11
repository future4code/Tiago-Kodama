import { Request, Response, Router } from 'express'
import { GetPokemonsByParams } from '../business/GetPokemonsByParams'
import { GetPokemonsByParamsController } from '../controller/GetPokemonsByParamsController'
import { PokemonRepository } from '../repository/PokemonRepository'

const router = Router()

const pokemonRepository = new PokemonRepository()
const getPokemonsByParams = new GetPokemonsByParams(pokemonRepository)
const getPokemonsByParamsController = new GetPokemonsByParamsController(getPokemonsByParams)

router.get('/params', (req:Request, res:Response) => {
    getPokemonsByParamsController.handle(req, res)
})

export default router