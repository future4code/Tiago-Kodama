import { Router } from "express";
import getPokemonByIdRouter from "./getPokemonsByIdRoute"

const router = Router()

router.use("/", getPokemonByIdRouter)

export { router }

