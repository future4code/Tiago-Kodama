import { Router } from "express";
import getPokemonByIdRouter from "./getPokemonsByIdRoute"
import getPokemonsByPageRouter from "./getPokemonsByPageRoute"
import getPokemonsbyParams from "./getPokemonsByParamsRoute"

const router = Router()

router.use("/", getPokemonsByPageRouter)
router.use("/", getPokemonByIdRouter)
router.use("/", getPokemonsbyParams)

export { router }

