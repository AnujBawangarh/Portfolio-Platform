import express from "express";
import registerUser  from "./src/controllers/register.controller.js";
import login from "./src/controllers/login.controller.js";
const app = express();

app.use(express.json());

app.use("/api/v1/users", registerUser);
app.use("/api/v1/users", login);

export {app};