import { Router } from 'express'
import { postCrearCodigo, postValidarCodigo, updatePassword } from '../controllers/recuperacioncontraseña.js'
import { validateSchema } from '../../middlewares/validarSchemas.js'
import { validacionRecumeracionShema, crearRecuperacionSchema, cambiarPassword } from '../schemas/LoginSchemas.js'

const recuperacionRouter = Router()

recuperacionRouter.post('/crear-codigo', validateSchema(crearRecuperacionSchema), postCrearCodigo)
recuperacionRouter.post('/validar-codigo', validateSchema(validacionRecumeracionShema), postValidarCodigo)
recuperacionRouter.put('/nuevo-password/:id', validateSchema(cambiarPassword), updatePassword)

export default recuperacionRouter