// ESQUEMA DE LOS PRODUCTOS //

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({

    nombre: String,
    categoria: String, // "creatina" "proteina" //
    descripcion: String,
    precio: Number,
    stock: Number,
    imagenUrl: String, // Enlace a la imagen del producto //

    active: { type: Boolean, default: true },
 
    }, { timestamps: true });

module.exports = mongoose.model ('product', productSchema);