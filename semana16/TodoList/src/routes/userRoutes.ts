import { Router } from "express";

const router = Router()

router.post('/users')
router.put('/users')
router.get('/users/:id')

export default router