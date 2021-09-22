import { Router } from "express";
import { filterByParameters, findAll, findCountryById } from "../controllers/countryController";

const router = Router()

router.get("/countries", findAll)
router.get("/countries/search", filterByParameters)
router.get("/countries/:id", findCountryById)

export default router