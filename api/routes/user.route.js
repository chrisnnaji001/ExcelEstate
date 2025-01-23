import express from 'express';
import { text } from '../controllers/user.controller.js';


const router = express. Router();

router.get('/test', test);

export default router;