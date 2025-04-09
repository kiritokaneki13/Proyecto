// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Importar las rutas de usuario
const app = express();

// Middleware para procesar solicitudes JSON
app.use(bodyParser.json());
app.use(cors());

// Usar las rutas de usuario
app.use('/api', userRoutes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
