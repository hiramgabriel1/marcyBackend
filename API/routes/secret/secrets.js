import { Router } from "express";
import { createPostSecret, showAllPosts, showPostByTitle } from "../../controllers/secret/secrets.js";
import cacheInit from "../../middlewares/cache.config.js";

const path = "/api/secret";
const routerSecret = Router();

routerSecret.post(`${path}/upload`, createPostSecret);
routerSecret.get(`${path}/show`, cacheInit, showAllPosts);
routerSecret.get(`${path}/search/:title`, cacheInit, showPostByTitle);

export default routerSecret;