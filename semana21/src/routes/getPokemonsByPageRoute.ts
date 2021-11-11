import { Request, Response, Router } from 'express'
import { GetPokemonsByPage } from '../business/GetPokemonsByPage'
import { GetPokemonsByPageController } from '../controller/GetPokemonsByPageController'
import { PokemonRepository } from '../repository/PokemonRepository'

const router = Router()

const pokemonRepository = new PokemonRepository()
const getPokemonsByPage = new GetPokemonsByPage(pokemonRepository)
const getPokemonsByPageController = new GetPokemonsByPageController(getPokemonsByPage)

router.get('/page', (req:Request, res:Response) => {
    getPokemonsByPageController.handle(req, res)
})

export default router