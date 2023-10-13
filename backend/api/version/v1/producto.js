import { validationResult } from 'express-validator';
import { conexion } from "../../db/conexion.js";
import { DTO } from "../validate/producto.js";
import { ObjectId } from 'mongodb';
const db = await conexion();

export const getProductoAllV1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:":(", data: await db});
   
    res.status(200).json({link: "https://http.cat/images/200.jpg", message:"Productos obtenidos", data: await db.collection("producto").find({}).toArray()})
}

export const getProductoV1 = async (req, res, next) => {
    
    if(!req.rateLimit) return;
    if(!DTO[`${req.headers["accept-version"]}`]) return res.status(431).json({link: `https://http.cat/images/${431}.jpg`, message:"Usuario envia el accept-version"});
    await Promise.all(DTO[`${req.headers["accept-version"]}`].map(res => res.run(req)));
    const {errors} = validationResult(req);
    if (errors.length) return res.status(400).json({ errors });
    try {
        res.status(200).json({link: "https://http.cat/images/200.jpg", message:"Productos obtenidos", data: await db.collection("producto").find({_id: new ObjectId(req.params.categoriaId)}).toArray()})
    } catch (error) {
        res.status(404).json({link: "https://http.cat/images/404.jpg", message:`Ocurrio un error con el _id ${req.params.categoriaId}`,  data: []})
    }
    
}

export const postProductoV1 = async (req, res, next) => {
    if(!req.rateLimit) return;
    if(!DTO[`${req.headers["accept-version"]}`]) return res.status(431).json({link: `https://http.cat/images/${431}.jpg`, message:"Usuario envia el accept-version"});
    await Promise.all(DTO[`${req.headers["accept-version"]}`].map(res => res.run(req)));
    const {errors} = validationResult(req);
    if (errors.length) return res.status(400).json({ errors });


    if(await db.status==500) res.status(await db.status).json({link: `https://http.cat/images/${await db.status}.jpg`, message:"Producto insertado correctamente", data: await db});
    const collection = db.collection("producto");
    res.status(201).json({link: "https://http.cat/images/201.jpg", message:"Producto guardado", data: await collection.insertOne(req.body)})
}