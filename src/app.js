//Autora: Valentina Solano 

//Rutas de todos los controladores funcionales para poderlas utilizar con el frontend
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
import facturaRouter from "./routes/factura.routes.js"
import metodopagoRouter from "./routes/metodoPago.routes.js";
import recuperacionRouter from "./routes/recuperacion.routes.js";
const app = express();

//
app.use(cookieParser());
//
app.use(morgan("dev"));
//
app.use(express.json());

//es un mecanismo que permite que se puedan solicitar recursos restringidos en una página web
app.use(cors({}));

//
app.use(express.urlencoded({ extended: true}))

//Cada vez que se llame por get muestre que funciona
app.get("/",(req,res)=>{
    res.send("Funciona");
});

//Ruta de la carpeta donde se podran observadas las imagenes.
//Se creo esta ruta para almacenar las imagenes en db local del proyecto.
app.use('/imagen', express.static('./var/data'))

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
 facturaRouter,
 metodopagoRouter,
 recuperacionRouter
 

)
export default app;

//Arquitectura.

//Modelo-vista-controlador es un patrón de arquitectura de software, que separa los datos
// y principalmente lo que es la lógica de negocio.

