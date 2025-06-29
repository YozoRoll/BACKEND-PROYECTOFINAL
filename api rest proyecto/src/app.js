// CARGA LAS RUTAS DESDE ARCHIVOS SEPARADOS //

const express  = require('express');
const mongoose = require('mongoose');

// CARGA LAS RUTAS DE PRODUCTOS Y USUARIOS //

const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');

// DEPENDENCIAS EXPRESS //
const app = express();
app.use(express.json());

// METODO PARA CONTECTAR MONGO //
connectDB();

app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);

// LAS RUTAS SE GUARDARÁN EN UNA VARIABLE LLAMADA "APP" //
module.exports = app;