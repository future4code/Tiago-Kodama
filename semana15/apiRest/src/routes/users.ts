import { Router } from 'express';
import {
    getUsers,
    getUsersByType
} from '../controllers/userController';

const router = Router()

router.get('/users', getUsers)
router.get('/users/:type', getUsersByType)

export default router