import { Router } from "express";
import { accesUser } from "../../controllers/auth/auth.js";

const path = "/api/auth/access"
const routerAccess = Router()

routerAccess.post(path, accesUser)

export default routerAccess