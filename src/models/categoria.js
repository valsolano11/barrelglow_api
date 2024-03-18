//En el modelo es donde se crean todas las tablas de la base de datos.
//Se utilizo sequilize ORM para Nodejs que nos permite manipular varias bases de datos SQL

import { DataTypes } from "sequelize";
import { conexion } from "../conexion.js";

const Categoria = conexion.define('Categoria',{
    // ID en automatico
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    tableName: 'Categorias',
    timestamps:false
})

export default Categoria

//ORM El mapeo relacional de objetos u ORM, es una técnica de programación para convertir
// datos entre el sistema de tipos utilizado en un lenguaje de programación orientado a objetos