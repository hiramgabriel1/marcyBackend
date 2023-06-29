import { Router } from "express";
import cacheInit from "../../../middlewares/cache.config.js";
import {
  submitSocialNetworks,
  getSocialNetworks,
  filterSocialNetworks,
} from "../../../controllers/users/networks-people/networks.js";

const routerNetworks = Router();
const path = "/api/networks";

routerNetworks.post(`${path}/submit`, submitSocialNetworks);
routerNetworks.get(`${path}/`, cacheInit, getSocialNetworks);
routerNetworks.get(`${path}/filter/:username`, cacheInit, filterSocialNetworks);

export default routerNetworks;