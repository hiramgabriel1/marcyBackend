import { Router } from "express";
import cacheInit from "../../middlewares/cache.config.js";
import {
  showUsers,
  showPosts,
  showSecrets,
  deleteUsers,
  deletePosts,
  deleteSecrets,
} from "../../controllers/admin/admin.js";

const routerAdmin = Router();
const path = "/api/admin";

routerAdmin.get(`${path}/users`, cacheInit, showUsers);
routerAdmin.get(`${path}/posts`, cacheInit, showPosts);
routerAdmin.get(`${path}/secrets`, cacheInit, showSecrets);

routerAdmin.delete(`${path}/delete/user/:username`, deleteUsers);
routerAdmin.delete(`${path}/delete/post/:titlePost`, deletePosts);
routerAdmin.delete(`${path}/delete/secret/:secretTitle`, deleteSecrets);

export default routerAdmin;