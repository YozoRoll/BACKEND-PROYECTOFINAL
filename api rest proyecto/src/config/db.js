// CONEXIÓN A MONGO DB //

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      writeConcern: { w: '1' }, // AP: w:1, CP: w:'majority' //
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;