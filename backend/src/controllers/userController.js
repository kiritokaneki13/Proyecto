// controllers/userController.js
const db = require('../config/dbConfig'); // Importar la conexión a la base de datos

// Función para registrar un usuario
const registerUser = (req, res) => {
  const { id_tipo_persona, nombre, apellido_pat, apellido_mat, sexo, fecha_nac, curp, rfc } = req.body;

  const query = `
    INSERT INTO personas (id_tipo_persona, nombre, apellido_pat, apellido_mat, sexo, fecha_nac, curp, rfc, activo)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
  `;

  db.execute(query, [id_tipo_persona, nombre, apellido_pat, apellido_mat, sexo, fecha_nac, curp, rfc], (err, results) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return res.status(500).json({ success: false, message: 'Error al registrar el usuario' });
    }
    res.status(200).json({ success: true, message: 'Usuario registrado exitosamente' });
  });
};

module.exports = {
  registerUser
};
