import { Router } from "express";
import { 
    filterByParameters, 
    findAll, 
    findCountryById,
    updateCountry,
    removeCountry,
    createCountry
} from "../controllers/countryController";

const router = Router()

router.get("/countries", findAll)
router.post("/countries", createCountry)
router.get("/countries/search", filterByParameters)
router.get("/countries/:id", findCountryById)
router.post("/countries/:id", updateCountry)
router.delete("/countries/:id", removeCountry)

export default router