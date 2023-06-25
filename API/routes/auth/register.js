import { Router } from "express";
import { createUser } from "../../controllers/auth/register.js";

const path = "/api/auth/create"
const routerCreate = Router()

routerCreate.post(path, createUser)

export default routerCreate