import { Router } from "express";

const router = Router()

router.post('/user')
router.put('/user/edit/:id')
router.get('/user/:id')

export default router