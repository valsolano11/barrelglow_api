import { Sequelize } from 'sequelize';
import conexion from "../conexion.js";

const create = async() => {
    return new Promise(async (resolve, reject) => {
        try{
            const t = await conexion.transaccion({
                isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED
            })
            return resolve({
                ok:true,
                data: t
            })
        } catch(error){
            reject(error);
        }
    });
}

const commit = async transaccion => {
    return new Promise(async (resolve, reject) => {
        try{
            await transaccion.commit()
            resolve({
                ok: true
            })
        } catch(error){
            reject(error);
        }
    });
}

const rollback = async transaccion => {
    return new Promise(async (resolve, reject) => {
        try{
            await transaccion.rollback()
            resolve({
                ok: true
            })
        } catch(error){
            reject(error);
        }
    });
}

export default {
    create,
    commit,
    rollback
}