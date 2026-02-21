import express from "express";
import registerUser  from "./src/controllers/register.controller.js";
const app = express();

app.use(express.json());

app.use("/api/v1/users", registerUser)

export {app};