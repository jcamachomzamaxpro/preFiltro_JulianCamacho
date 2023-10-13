import {Router} from "express";
import routesVersioning from 'express-routes-versioning';
import { limitGetProducto, limitPostProducto } from "../helpers/rateLimit.js";
import { getProductoAllV1, getProductoV1, postProductoV1 } from "../version/v1/producto.js";

const version = routesVersioning();
const appProducto = Router();
// accept-version

appProducto.get("/:categoriaId?", limitGetProducto(), version({
    "1.0.0": getProductoAllV1,
    "1.0.1": getProductoV1,
}));

appProducto.post("/", limitPostProducto(), version({
    "1.0.0": postProductoV1,
}));

export default appProducto;