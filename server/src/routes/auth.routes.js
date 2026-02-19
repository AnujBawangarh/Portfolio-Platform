import { registerUser } from "../controllers/register.controller";

import { Router } from "express";
const router = Router();

router.route("/register").post(registerUser);


module.exports = router;