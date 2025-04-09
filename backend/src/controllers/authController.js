const pool = require('../config/database');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const {
      nombre,
      apellido_pat,
      apellido_mat,
      sexo,
      fecha_nac,
      curp,
      rfc,
      id_tipo_persona,
      username,
      password,
    } = req.body;
  
    try {
      // Insertar en personas
      const [personaResult] = await pool.query(
        `INSERT INTO personas (id_tipo_persona, nombre, apellido_pat, apellido_mat, sexo, fecha_nac, curp, rfc, activo)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)`,
        [id_tipo_persona, nombre, apellido_pat, apellido_mat, sexo, fecha_nac, curp, rfc]
      );
  
      const id_personas = personaResult.insertId;
  
      // Hashear contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insertar en login
      await pool.query(
        `INSERT INTO login (id_personas, username, password, fecha_creacion)
         VALUES (?, ?, ?, NOW())`,
        [id_personas, username, hashedPassword]
      );
  
      res.status(201).json({ message: 'Persona registrada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al registrar' });
    }
  };

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = users[0];
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Contraseña incorrecta' });

    res.json({ message: 'Login exitoso', role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
