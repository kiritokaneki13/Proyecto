const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para guardar una nueva persona
app.post('/api/persona', (req, res) => {
  const { nombre, apellido_paterno, apellido_materno, curp, rfc, telefono, email, password, direccion, fecha_nacimiento, genero, id_tipo_persona } = req.body;
  
  const query = `INSERT INTO Persona (nombre, apellido_paterno, apellido_materno, curp, rfc, telefono, email, password, direccion, fecha_nacimiento, genero, id_tipo_persona) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [nombre, apellido_paterno, apellido_materno, curp, rfc, telefono, email, password, direccion, fecha_nacimiento, genero, id_tipo_persona], (err, result) => {
    if (err) {
      console.error('Error al insertar persona:', err);
      res.status(500).send('Error al guardar los datos');
      return;
    }
    res.status(200).send('Persona guardada exitosamente');
  });
});

// Ruta para login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM Persona WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error en la consulta de login:', err);
      res.status(500).send('Error en el servidor');
      return;
    }

    if (results.length > 0) {
      res.status(200).send('Login exitoso');
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
