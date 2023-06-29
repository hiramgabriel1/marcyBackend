import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import colors from "colors"
import connectionDB from "../config/connection.js";
import routerAcces from "../routes/auth/auth.js";
import routerCreate from "../routes/auth/register.js"
import routerSecret from "../routes/secret/secrets.js"
import routerPost from "../routes/users/posts.js";
import routerFile from "../routes/files/files.routes.js";
import routerNetworks from "../routes/users/networks-people/networks.js";
import routerAdmin from "../routes/admin/admin.routes.js"

dotenv.config()
connectionDB()

const app = express();
const PORT = process.env.PORT || 5000

// & middleware
app.use(cors())
app.use(express.json())

// &  routes
app.use(routerNetworks) // TODO share social networks
app.use(routerAcces) // TODO login user
app.use(routerCreate) // TODO create user
app.use(routerSecret) // TODO secret posts
app.use(routerPost) // TODO posts
app.use(routerFile) // TODO files 
app.use(routerAdmin) // TODO admin

// & listening on PORT 3000
app.listen(PORT)