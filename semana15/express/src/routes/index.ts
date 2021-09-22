import { Router } from "express";
import { 
    filterByParameters, 
    findAll, 
    findCountryById,
    updateCountry 
} from "../controllers/countryController";

const router = Router()

router.get("/countries", findAll)
router.get("/countries/search", filterByParameters)
router.get("/countries/:id", findCountryById)
router.post("/countries/:id", updateCountry)

export default router