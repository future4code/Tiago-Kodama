import { Router } from "express";
import getPokemonByIdRouter from "./getPokemonsByIdRoute"
import getPokemonsByPageRouter from "./getPokemonsByPageRoute"
import getPokemonsbyParamsRouter from "./getPokemonsByParamsRoute"
import getPokemonsRouter from "./getPokemonsRoute"

const router = Router()

router.use("/", getPokemonsByPageRouter)
router.use("/", getPokemonsbyParamsRouter)

router.use("/", getPokemonByIdRouter)
router.use("/", getPokemonsRouter)

export { router }

