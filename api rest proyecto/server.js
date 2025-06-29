// SERVER.JS TEMPLATE CAP - ENCENDIDO DEL SERVER //
require('dotenv').config();
const app = require('./src/app');

// ARRANQUE //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`API ${DB_NAME} en http://localhost:${PORT}`)
);
