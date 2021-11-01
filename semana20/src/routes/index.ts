import { Router } from "express";

const router = Router()

router.post('/users/signup')
router.post('/users/login')
router.post('/posts/create')

router.get('/posts/:id')

export { router }