import express from "express";
import { isAuthenticated } from "../middlewares/auth.js"
import {
    Login,
    getMyProfile,
    register,
    logout,
} from '../controllers/user.js';

const router = express.Router();

router.post('/new', register);
router.post('/login', Login);
router.get('/logout', logout);
router.get('/me', isAuthenticated, getMyProfile);

export default router;
