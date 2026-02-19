import { registerUser } from "./src/controllers/register.controller.js";

import express from "express";
const app = express();

app.use(express.json())

app.use("/api/v1/users",registerUser);

export default app;