import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import colors from "colors"
import routerAcces from "../routes/auth/login.js";
import routerCreate from "../routes/auth/register.js"
import connectionDB from "../config/connection.js";

dotenv.config()
connectionDB()

const app = express();
const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use(routerAcces) //login user
app.use(routerCreate) //create user

// listening on PORT 3000
app.listen(PORT)