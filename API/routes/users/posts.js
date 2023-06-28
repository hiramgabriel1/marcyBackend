import { Router } from "express";
import {
  createPost,
  filterPosts,
  showPosts,
} from "../../controllers/users/posts.js";
import cacheInit from "../../middlewares/cache.config.js";
// import { uploadFiles } from "../../middlewares/multer/uploadFiles.js";

const path = "/api/post";
const routerPost = Router();

routerPost.post(`${path}/submit`, createPost);
routerPost.get(`${path}/view`, cacheInit, showPosts);
routerPost.get(`${path}/:filter`, cacheInit, filterPosts);

export default routerPost;
