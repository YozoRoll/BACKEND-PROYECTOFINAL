// ESQUEMA DEL USUARIO, LOGIN, DIRECCIONES Y BENEFICIOS //

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  nombre: String,
  correo: String,
  contraseña: String,
  esSocio: Boolean,

  direcciones: [{
    calle: String,
    ciudad: String,
    region: String,
    codigoPostal: String

    }],
    
    active: { type: Boolean, default: true },

    }, { timestamps: true });

module.exports = mongoose.model('user', userSchema);