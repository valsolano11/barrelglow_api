import jwt from "jsonwebtoken";
import { config } from "dotenv";
import Usuario from "../models/usuarios.js";

config();

export const crearToken = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve(token);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const verificarToken = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
          return reject(err);
        }

        const usuario = await Usuario.findByPk(decoded.id);

        if (!usuario) {
          return reject({ message: 'Usuario no encontrado' });
        }

        resolve({
          token,
          usuario: {
            id: usuario.id,
            username: usuario.username,
            correo: usuario.correo,
            telefono: usuario.telefono,
            estado: usuario.estado,
            rol: usuario.rol,
          },
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};