import { Router } from "express";
import getPokemonByIdRouter from "./getPokemonsByIdRoute"
import getPokemonsByPageRouter from "./getPokemonsByPageRoute"

const router = Router()

router.use("/", getPokemonsByPageRouter)
router.use("/", getPokemonByIdRouter)

export { router }

