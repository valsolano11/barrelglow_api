import { z } from "zod";

export const loginSchema = z.object({
    
    correo: z.string({
        required_error: "El correo es requerido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida",
      })
});


export const crearRecuperacionSchema = z.object({
    correo: z.string({
        required_error: 'El correo es requerido',
    })

}) 

export const validacionRecumeracionShema = z.object({
    correo: z.string({
        required_error: 'El correo es requerido',
        invalid_type_error: 'El correo debe ser un texto'
    }).max(100, 'El correo debe tener máximo 50 carácteres'),

    token: z.string({
        required_error: 'El token es obligatorio',
        invalid_type_error: 'El tipo de dato es invalido'
    })
})

export const cambiarPassword = z.object({
    password: z.string({
        required_error: 'La contraseña es requerida',
        invalid_type_error: 'La contraseña debe ser un texto'
    }).min(8, 'La contraseña debe tener mínimo 8 carácteres')
    .max(50, 'La contraseña debe tener máximo 50 carácteres')
})
