import rateLimit from "express-rate-limit";
export let limitPostProducto = ()=>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{
            if(req.headers["content-length"]>9999){
                res.status(413).json({link: "https://http.cat/images/413.jpg", message:"Tamaño de la solicitud alcanzado"})
                return true;
            }
        }, 
        message: (req,res)=>{
            res.status(429).json({link: "https://http.cat/images/429.jpg", message:"Limite alcanzado", data: req.rateLimit})
        }
    })    
}
export let limitGetProducto = ()=>{
    return rateLimit({
        windowMs: 10 * 1000,
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{
            if(req.headers["content-length"]>1){
                res.status(413).json({link: "https://http.cat/images/413.jpg", message:"Tamaño de la solicitud alcanzado"})
                return true;
            }
        }, 
        message: (req,res)=>{
            res.status(429).json({link: "https://http.cat/images/429.jpg", message:"Limite alcanzado", data: req.rateLimit})
        }
    })    
}