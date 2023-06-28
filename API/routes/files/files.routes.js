import { Router } from "express";
import cacheInit from "../../middlewares/cache.config.js";
import { uploadFile, showFiles, filterFiles } from "../../controllers/files/files.controller.js";
import { uploadFiles } from "../../middlewares/multer/uploadFiles.js";

const routerFile = Router()
const path = "/api/file"

routerFile.post(`${path}/upload`, uploadFiles(), uploadFile) // todo: subida
routerFile.get(`${path}/render`, cacheInit, showFiles) // todo: mostrar
routerFile.get(`${path}/:filter`, cacheInit, filterFiles) // todo: filtrar por nombre

export default routerFile