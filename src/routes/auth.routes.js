import { Router } from "express";
import { signin, signup, profile } from "../controllers/index.js";

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', profile);

export { router };
