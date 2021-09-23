import { Router } from "express";
import { 
    createCountry,
    findAll,
    filterByParameters,
    findCountryById,
    updateCountry,
    removeCountry
 } from "../controllers/countryController";

const router = Router()

router.get("/countries", findAll)
router.post("/countries", createCountry)
router.get("/countries/search", filterByParameters)
router.get("/countries/:id", findCountryById)
router.put("/countries/:id", updateCountry)
router.delete("/countries/:id", removeCountry)

export default router