import login from "../controllers/login.controller.js";
import registerUser from "../controllers/register.controller.js";

import { Router } from "express";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login)


module.exports = router;