import { Router } from 'express';
import {
    getUsers,
    getUsersByType,
    getUserByName
} from '../controllers/userController';

const router = Router()

router.get('/users', getUsers)
router.get('/users/:type', getUsersByType)
router.post('/users', getUserByName)

export default router