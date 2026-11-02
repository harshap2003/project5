import express from 'express';
import { getUsers, getUserById, addUser, updateUser, deleteUser, loginUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', loginUser);


export default router;
