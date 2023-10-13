import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import appProducto from "./routes/producto.js";

dotenv.config();
const env = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/producto", appProducto);



const config = {
    hostname:env.HOSTNAME, 
    port:env.PORT_BACKEND
};
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
}); 