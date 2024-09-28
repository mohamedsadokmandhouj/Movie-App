import express from 'express';
import { getUserData, loginUser, registerUser } from '../controllers/user.js';
import cors from 'cors';

const router = express.Router();

// Apply CORS middleware
router.use(cors());

// Registration aka adding user with post request
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/userdata', getUserData);

// Export the router
export default router;

