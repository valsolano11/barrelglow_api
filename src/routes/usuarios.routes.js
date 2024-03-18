//Aqui esta lo de las rutas

import { Router } from "express";
//La ruta de validacion de schemas
import validarSchema from "../middlewares/validarSchemas.js"
import usuarioSchema from "../schemas/UsuariosSchema.js"
//Controladores. 
import { crearUsuario, getAllUsuario, getUsuario, putUsuario, deleteUsuario} from "../controllers/usuarios.controller.js";
//Validacion del token
import { rutaProtegida } from '../middlewares/validarToken.js'
//validacion del rol
import { validarRolAdmin } from "../middlewares/validarRol.js";

const usuariosRouter = Router()
//Todos estos son metodos 


//Sirve para obtener más información, consulte Propiedades
usuariosRouter.get('/usuarios', /* rutaProtegida, */ getAllUsuario)

//Sirve para obtener más información, consulte Propiedades
usuariosRouter.get('/usuarios/:id', /* rutaProtegida, */ getUsuario)

//Sirve para agregar informacion y la validacion schema se utiliza para verificar que si se llenen todos
//los campos
usuariosRouter.post('/usuarios',validarSchema(usuarioSchema), rutaProtegida, validarRolAdmin, crearUsuario)

//Sirve para modificar información
usuariosRouter.put('/usuarios/:id', rutaProtegida, validarRolAdmin, putUsuario)

//Sirve para eliminar la informacion
usuariosRouter.delete('/usuarios/:id', rutaProtegida, validarRolAdmin, deleteUsuario)

export default usuariosRouter