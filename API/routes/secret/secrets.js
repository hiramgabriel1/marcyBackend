import { Router } from "express";
import { createPostSecret, showAllPosts, showPostByTitle } from "../../controllers/secret/secrets.js";

const path = "/api/secret";
const routerSecret = Router();

routerSecret.post(`${path}/upload`, createPostSecret);
routerSecret.get(`${path}/show`, showAllPosts);
routerSecret.get(`${path}/search/:title`, showPostByTitle);

export default routerSecret;
