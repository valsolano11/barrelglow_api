import cookieParser from "cookie-parser";
import cors from "cors"
import express from "express";
import morgan from "morgan";
import usuariosRouter from "./routes/usuarios.routes.js";
import registroRouter from "./routes/registro.routes.js";
import LoginRouter from "./routes/login.routes.js";
import categoriaRouter from "./routes/categoria.routes.js"
import productosRouter from "./routes/productos.routes.js";
import proveedorRouter from "./routes/proveedor.routes.js";
import detalleFactura from "./routes/detalleFactura.routes.js";
import PaymentRouter from "./routes/payment.routes.js";

//import carritoRoutes from "./routes/carrito.routes.js";

const app = express();

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}))

//Cada vez que se llame por get muestre que funciona
app.get("/",(req,res)=>{
    res.send("Funciona");
});

app.use('/imagen', express.static('./src/upload'))

//RUTAS EN APP
app.use(
 usuariosRouter,
 registroRouter,
 LoginRouter,
 categoriaRouter,
 productosRouter,
 proveedorRouter,
 detalleFactura,
 PaymentRouter,
 /* 
 facturaRouter */
/*  facturaRouter */
 

)
export default app;

