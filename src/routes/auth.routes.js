import { Router } from "express";
import { signin, signup, signout, profile } from "../controllers/index.js";

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.get('/profile', profile);

export { router };
