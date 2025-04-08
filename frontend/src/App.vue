<template> 
  <div id="app">
    <h1>Formulario de Persona</h1>
    <form @submit.prevent="guardarPersona">
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="persona.nombre" required />
      </div>
      <div>
        <label for="apellido_paterno">Apellido Paterno</label>
        <input type="text" id="apellido_paterno" v-model="persona.apellido_paterno" required />
      </div>
      <div>
        <label for="apellido_materno">Apellido Materno</label>
        <input type="text" id="apellido_materno" v-model="persona.apellido_materno" />
      </div>
      <div>
        <label for="curp">CURP</label>
        <input type="text" id="curp" v-model="persona.curp" required />
      </div>
      <div>
        <label for="rfc">RFC</label>
        <input type="text" id="rfc" v-model="persona.rfc" />
      </div>
      <div>
        <label for="telefono">Teléfono</label>
        <input type="text" id="telefono" v-model="persona.telefono" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="persona.email" />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="persona.password" required />
      </div>
      <div>
        <label for="direccion">Dirección</label>
        <textarea id="direccion" v-model="persona.direccion" required></textarea>
      </div>
      <div>
        <label for="fecha_nacimiento">Fecha de Nacimiento</label>
        <input type="date" id="fecha_nacimiento" v-model="persona.fecha_nacimiento" required />
      </div>
      <div>
        <label for="genero">Género</label>
        <select id="genero" v-model="persona.genero" required>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label for="id_tipo_persona">Tipo de Persona</label>
        <input type="number" id="id_tipo_persona" v-model="persona.id_tipo_persona" required />
      </div>
      <button type="submit">Guardar Persona</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const persona = ref({
  nombre: '',
  apellido_paterno: '',
  apellido_materno: '',
  curp: '',
  rfc: '',
  telefono: '',
  email: '',
  password: '',
  direccion: '',
  fecha_nacimiento: '',
  genero: 'M',
  id_tipo_persona: 1,
});

const guardarPersona = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/persona', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(persona.value),
    });
    if (response.ok) {
      alert('Persona guardada exitosamente');
    } else {
      alert('Error al guardar los datos');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al conectar con el servidor');
  }
};
</script>

<style scoped>
/* Estilos básicos */
form {
  width: 100%;  /* Ancho completo */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Asegura que el padding no rompa el diseño */
}
div {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, select, textarea {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%; /* Hace que el botón ocupe el 100% de ancho */
}
button:hover {
  background-color: #45a049;
}
</style>
