import { Router } from "express";

const router = Router()

router.post('/task')
router.get('/task/:id')

export default router